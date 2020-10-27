<template>
<b-container>
    <b-breadcrumb>
        <b-breadcrumb-item active>
            <font-awesome-icon icon="envelope" />&nbsp;Newsletters
        </b-breadcrumb-item>
    </b-breadcrumb>

    <h2 class="text-center">Abonnés</h2>
    <br />
    <!-- newsletters: {{ newsletters }}<br /><br /> -->

    <b-table ref="selectableTable" selectable select-mode="multi" :items="newsletters" :fields="fields" responsive="sm" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" @row-selected="onRowSelected">
        <!-- Example scoped slot for select state illustrative purposes -->
        <template v-slot:cell(selected)="{ rowSelected }">
            <template v-if="rowSelected">
                <span aria-hidden="true">&check;</span>
                <span class="sr-only">Selected</span>
            </template>
            <template v-else>
                <span aria-hidden="true">&nbsp;</span>
                <span class="sr-only">Not selected</span>
            </template>
        </template>

        <template v-slot:cell(is_active)="row">
            <span class="text-success" v-if="row.item.is_active"> Oui </span>
            <span class="text-danger" v-else> Non </span>
        </template>

        <template v-slot:cell(updated_at)="row">
            {{ row.item.updated_at | moment('from', 'now') }}
        </template>

        <template v-slot:cell(actions)="data">
            <b-button variant="danger" @click="deleteSubscription(data.item.id)" class="my-1">
                <font-awesome-icon icon="trash" />
            </b-button>
        </template>
    </b-table>
    <p>
        <b-button variant="primary" size="sm" @click="selectAllRows">Tout sélectionner</b-button>
        <b-button variant="secondary" size="sm" @click="clearSelected">Tout désélectionner</b-button>
    </p>
    <br /><br />
    <div>
        <h3 class="text-center mb-3">Rédiger une newsletter:</h3>
        <text-editor @toggleShowHTML="toggleShowHTML" />
    </div>
    <p class="text-center">
        <b-button variant="success" size="sm" @click="sendNewsletter">Envoyer la newsletter</b-button>
    </p>
    <!-- <p>
        Selected Rows:<br />
        {{ selected }}
    </p> -->
</b-container>
</template>

<script>
import axios from 'axios'
import TextEditor from '~/components/TextEditor'

export default {
    components: {
        TextEditor
    },
    layout: 'backend',
    async created() {
        try {
            // if (Object.keys(this.$store.getters['newsletters/newsletters']).length < 2) {
            this.$store.commit('loading/SET_LOADING', true)
            await this.$store.dispatch('newsletters/fetchNewsletters')
            this.$store.commit('loading/SET_LOADING', false)
            // }
        } catch (error) {
            console.log('error: ', error)
            this.$store.commit('loading/SET_LOADING', false)
        }
    },
    data() {
        return {
            sortBy: 'id',
            sortDesc: true,
            fields: [{
                    key: 'id',
                    label: 'ID',
                    sortable: true
                },
                {
                    key: 'selected',
                    label: '',
                    sortable: true
                },
                {
                    key: 'email',
                    label: 'E-mail',
                    sortable: true
                },
                {
                    key: 'is_active',
                    label: 'Est actif?',
                    sortable: true
                },
                {
                    key: 'emails_sent',
                    label: "Nb. d'envois",
                    sortable: true
                },
                // { key: 'last_sent_email', label: 'Dernier e-mail envoyé', sortable: true },
                {
                    key: 'updated_at',
                    label: 'Dernière modification',
                    sortable: true
                },
                {
                    key: 'actions',
                    sortable: false
                },
            ],
            selected: [],
            showHTML: false
        }
    },
    computed: {
        loading() {
            return this.$store.getters['loading/loading']
        },
        newsletters() {
            return Object.values(this.$store.getters['newsletters/newsletters'])
        },
        selectedSubscribers() {
            return this.selected.map(({
                id,
                email
            }) => ({
                id,
                email
            }))
        },
    },
    methods: {
        onRowSelected(items) {
            this.selected = items
        },
        selectAllRows() {
            this.$refs.selectableTable.selectAllRows()
        },
        clearSelected() {
            this.$refs.selectableTable.clearSelected()
        },
        toggleShowHTML(value) {
            console.log('toggleShowHTML: ', value)
            this.showHTML = value
        },
        async sendNewsletter() {
            try {
                console.log('selectedSubscribers: ', this.selectedSubscribers)
                console.log('selected: ', this.selected)
                let content
                if (!this.showHTML) {
                    content = document.getElementById('textBox').innerHTML
                } else {
                    content = document.getElementById('textBox').innerText
                }
                await this.$store.dispatch('newsletters/sendNewsletter', {
                    subscribers: this.selectedSubscribers,
                    newsletter: content
                })
            } catch (error) {
                console.log('error: ', error)
            }
        },
        async deleteSubscription(subscriptionId) {
            try {
                const value = await this.$bvModal.msgBoxConfirm(`Etes-vous sûr de vouloir supprimer l'inscription ${subscriptionId}?`, {
                    okTitle: 'Oui',
                    cancelTitle: 'Annuler',
                })
                console.log('value: ', value)
                if (value) {
                    await this.$store.dispatch('newsletters/deleteSubscription', {
                        newsletterId: subscriptionId
                    })
                    this.$noty.success('Inscription supprimée avec succès!')
                }
            } catch (error) {
                console.log('error: ', error)
                this.$noty.error("Une erreur est survenue et l'inscription n'a pas pu être supprimée.")
            }
        },
    },
}
</script>

<style scoped></style>
