function collect_same_elements(collection_a, collection_b) {
		var coll_a_len=collection_a.length;
		var coll_b_len=collection_b.length;
		var collection_c=new Array();
		for(var i=0;i<coll_a_len;i++){
			for(var j=0;j<coll_a_len;j++){
				if(collection_a[i]===collection_b[j]){
					collection_c.push(collection_a[i]);
					break;
				}
			}
		
		}
		return collection_c;
	}
module.exports = collect_same_elements;
