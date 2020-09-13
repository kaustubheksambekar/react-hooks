import { TreePost } from '../../../../../types/ITreeDataContext';
// gets tree expanded node ids
export function getExpandedPostIDs(postReplies: TreePost[]): string[] {
	const userIDs: string[] = [];
	function getThreadId(posts: TreePost[]) {
		posts.forEach(thread => {
			if (thread.isExpanded) {
				userIDs.push(thread.id);
			}
		});
	}

	getThreadId(postReplies);
	return userIDs;
}
