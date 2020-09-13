import { TreePost } from '../../../../../types/ITreeDataContext';

const flattenedPosts: TreePost[] = [];

function structureData(posts: TreePost[]) {
	posts.forEach(post => {
		flattenedPosts.push(post);
		if (post.replies.length) {
			structureData(post.replies);
		}
	});

	return flattenedPosts;
}

export default structureData;
