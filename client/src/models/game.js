export default {
    validate: (game) => {
        if(game.title === '' || !game.title) {
            return 'Title is required';
        }

        if(game.description === '' || !game.description) {
            return 'Description is required';
        }

        if(game.thumbnail === '' || !game.thumbnail) {
            return 'Thumbnail is required';
        }

        if(game.trailer === '' || !game.trailer) {
            return 'YouTube video url is required';
        }
    }
}