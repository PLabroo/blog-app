var userSchema = new mongoose.Schema({
	email:String,
	name:String
});

var User = mongoose.model("User", userSchema);

var postSchema = new mongoose.Schema({
	title:String,
	content:String
});

var postModel = mongoose.model("Post", postSchema);

var newUser = new User({
	email:"prateeklabroo123@gmail.com",
	name:"Prateek Labroo"
});

newUser.save(function(err, user){
	if(err){
		console.log(err);
	}else{
		console.log(user);
	}
});