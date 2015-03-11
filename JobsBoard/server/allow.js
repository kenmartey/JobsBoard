Jobs.allow({
	insert: function (userId, doc) {
		if(userId){

			return true;
		}
	},
	update: function (userId, doc, fields, modifier) {
		if(userId && userId === doc.owned){
			return true;
		}
	},
	remove: function (userId, doc) {
		if(userId && userId === doc.owned){
			return true;
		}
	}
});

Images.allow({
	insert: function (userId, doc) {
		return true;
	},
	update: function (userId, doc, fields, modifier) {
		return true;
	},
	remove: function (userId, doc) {
		return true;
	},
	download: function(){
		return true;
	}
});

Applications.allow({
	insert: function (userId, doc) {
		if(userId){
			return true;
		}
	},
	update: function (userId, doc, fields, modifier) {
		if(userId && userId === owned){
			return false;
		}
	},
	remove: function (userId, doc) {
		if(userId && userId === owned){
			return false;
		}
	}
});

Files.allow({
	insert: function (userId, doc) {
		return true;
	},
	update: function (userId, doc, fields, modifier) {
		return true;
	},
	remove: function (userId, doc) {
		return true;
	},
	download: function(){
		return true;
	}
});