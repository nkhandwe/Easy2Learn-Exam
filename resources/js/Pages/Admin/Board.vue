<template>
    <admin-layout>
        <template #header>
            <h4 class="page-heading">{{ __('Board') }}</h4>
        </template>
        <template #actions>
            <button @click="" class="qt-btn qt-btn-success">
                {{ __('New') }} {{ __('Board') }}
            </button>
        </template>

        <div class="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-6">
                            <h2>Boards</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </admin-layout>
</template>


<script>
import AdminLayout from '@/Layouts/AdminLayout'
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import BoardForm from "@/Components/Forms/BoardForm";
import Sidebar from 'primevue/sidebar'
import Chip from 'primevue/chip';
import Tag from 'primevue/tag';
import NoDataTable from "@/Components/NoDataTable";
import ActionsDropdown from "@/Components/ActionsDropdown";

export default {
    components: {
        AdminLayout,
        BoardForm,
        Column,
        InputText,
        Toolbar,
        Button,
        Sidebar,
        Chip,
        Tag,
        NoDataTable,
        ActionsDropdown
    },
     props: {
        boards: Object,
        errors: Object,
    },

}
</script>
