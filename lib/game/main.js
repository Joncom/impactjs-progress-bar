ig.module('game.main')
.requires(
    'impact.game',
    'impact.font',
    'game.entities.progress-bar'
)
.defines(function(){

MyGame = ig.Game.extend({

    timer: new ig.Timer(),
    totalTime: 5,

    init: function() {
        // Spawn progress bar.
        var x = ig.system.width/2 - EntityProgressBar.prototype.size.x/2;
        var y = ig.system.height/2 - EntityProgressBar.prototype.size.y/2;
        this.progressbar = this.spawnEntity(EntityProgressBar, x, y);
        // Prepare demo timer.
        this.timer.set(this.totalTime);
    },

    update: function() {
        this.parent();
        // Update the progress bar.
        var time = this.timer.delta();
        if(time >= 0) this.progressbar.progress = 1;
        else this.progressbar.progress = (this.totalTime - Math.abs(time)) / this.totalTime;
        // Reset the timer after 3 seconds of being "done".
        if(time >= 3) this.timer.reset();
    }

});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 320, 240, 2 );

});
