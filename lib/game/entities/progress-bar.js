ig.module('game.entities.progress-bar')
.requires('impact.entity')
.defines(function() {

    EntityProgressBar = ig.Entity.extend({

        init: function(x, y, settings) {
            this.parent(x, y, settings);
        },

        draw: function() {
            this.parent();
        }

    });

});