// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
var chatSchema = new mongoose.Schema ({
		type : String, default: ''

})
/*module.exports = mongoose.model('chat', {
	name : {type : String, default: ''}
});
*/
module.exports = mongoose.model('chat',chatSchema);
