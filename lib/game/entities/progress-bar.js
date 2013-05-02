ig.module('game.entities.progress-bar')
.requires('impact.entity')
.defines(function() {

    EntityProgressBar = ig.Entity.extend({

        size: { x: 128, y: 16 },
        progress: 0, // Number between 0 and 1.
        _fillWidth: 0,

        init: function(x, y, settings) {
            this.parent(x, y, settings);
        },

        update: function() {
            // Calculate pixel width to be drawn.
            if(this.progress <= 0) this._fillWidth = 1;
            else if (this.progress >= 1) this._fillWidth = this.size.x;
            else this._fillWidth = Math.ceil(this.progress * this.size.x);
        },

        draw: function() {
            ig.system.context.fillStyle="#FF0000";
            ig.system.context.fillRect(25,25,100,100);
            ig.Image.drawCount++;
        }

    });

});