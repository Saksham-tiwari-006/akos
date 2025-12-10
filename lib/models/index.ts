// Export all models from a single file for easy imports
export { default as User } from './User';
export { default as Consultation } from './Consultation';
export { default as Contact } from './Contact';
export { default as Review } from './Review';
export { default as ServiceInquiry } from './ServiceInquiry';
export { default as Service } from './Service';
export { default as Analytics } from './Analytics';
export { default as Message } from './Message';

// Export types
export type { IUser } from './User';
export type { IConsultation, IDocument } from './Consultation';
export type { IContact } from './Contact';
export type { IReview } from './Review';
export type { IServiceInquiry } from './ServiceInquiry';
export type { IService, IPricing } from './Service';
export type { IAnalytics } from './Analytics';
export type { IMessage } from './Message';
