		import mongoose, {Schema} from 'mongoose';

const AdaptationPlanSchema = new Schema({
	FIOEmployee: [{type: Schema.Types.ObjectId, ref: 'User', require: true, 'unique': True}],
	Position: { type: String},
	DateCreate: {	type: Date, require: true, default: Date.now },
	DirectiorEmployee: [{type: Schema.Types.ObjectId, ref: 'User', require: true}],
	HREmployee: [{type: Schema.Types.ObjectId, ref: 'User', require: true}],
	Stage: {type: String},
	AdaptationPeriodStart: { type: Date, default: Date.now},
	AdaptationPeriodEnd: { type: Date},
	ResultofAdaptation: { type: String},
	Mark: { type: String},
	Tasks: [{ type: Schema.Types.ObjectId, ref: 'Task'}] 
});

const TaskSchema = new Schema({
	bodyTask: {type: String},
	CreatedAt: { type: Date, require: true, default: Date.now},
	TaskPeriodStart: { type: Date, default: Date.now},
	TaskPeriodEnd: { type: Date},
	ResultTask: {type: String}
});

const Task = mongoose.model('Task', TaskSchema);
const Plan = mongoose.model('Plan', AdaptationPlanSchema);