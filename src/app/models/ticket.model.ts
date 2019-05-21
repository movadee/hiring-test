export default class Ticket {
	id: number;
	description: string;
	assigneeId: number;
	completed: boolean;

	constructor() {
		this.description = '';
		this.assigneeId = null;
		this.completed = false;
	}

	static generateMockTicket(): Ticket {
		return {
			id: null,
			description: '',
			assigneeId: null,
			completed: false
		};
	}
}
