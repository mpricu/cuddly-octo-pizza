<template>
    <div class="card">
        <div class="title">
            <slot name="header"> </slot>
        </div>
        <div class="close">X</div>
        <div class="body">
            <slot></slot>
        </div>
        <div class="actions">
            <slot name="actions" :extras="extras">
                <button @click="close">Close</button>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            extras: { shit: false, rainbows: true }
        };
    },
    methods: {
        close() {}
    }
};
</script>

<style lang="scss" scoped>
.card {
    display: grid;
    grid-template-areas:
        'title   .       .       close'
        'body    body    body    body'
        'actions actions actions actions';
    /* width: 400px;
    height: 600px; */
    padding: 20px 10px;
    gap: 20px;

    .title {
        grid-area: title;
        font-size: 2rem;
        color: tomato;
    }

    .close {
        grid-area: close;
        font-size: 2rem;
        color: white;
        background-color: lightseagreen;
        border-radius: 10px;
        width: 35px;
        height: 35px;
        border: 1px solid teal;
    }

    .body {
        grid-area: body;
    }

    .actions {
        border-bottom: 2px dashed gray;
        margin-bottom: 5px;
        padding-bottom: 10px;
        grid-area: actions;
        > * {
            all: none;
            color: fuchsia;
        }
    }
}
</style>
