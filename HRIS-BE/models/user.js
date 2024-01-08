import mongoose from "mongoose";

interface UserNotificationAttrs {
  _userId: string;
  // _involvedUserId: string;
  _notificationAboutId: string;
  notificationAbout: string;
  notificationTitle: string;
  notificationDesc: string;
  notificationStatus: string;
  sentDate: Date;
  read: Boolean;
}

interface UserNotificationModel extends mongoose.Model<UserNotificationDoc> {
  build(attrs: UserNotificationAttrs): UserNotificationDoc;
}

interface UserNotificationDoc extends mongoose.Document {
  _userId: string;
  // _involvedUserId: string;
  _notificationAboutId: string;
  notificationAbout: string;
  notificationTitle: string;
  notificationDesc: string;
  notificationStatus: string;
  sentDate: Date;
  read: Boolean;
}

const userNotificationSchema = new mongoose.Schema({
  _userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  // _involvedUserId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  // },
  _notificationAboutId: {
    type: String,
  },
  notificationAbout: {
    type: String,
    // enum: [null, "rrlib", "action", "approved", "rejected"],
  },
  notificationTitle: {
    type: String,
  },
  notificationDesc: {
    type: String,
  },
  notificationStatus: {
    type: String,
    enum: [null, "deleted", "action", "approved", "rejected"],
  },
  sentDate: {
    type: Date,
    default: Date.now(),
  },
  read: {
    type: Boolean,
  },
});

userNotificationSchema.statics.build = (attrs: UserNotificationAttrs) => {
  return new UserNotification(attrs);
};

const UserNotification = mongoose.model<
  UserNotificationDoc,
  UserNotificationModel
>("UserNotification", userNotificationSchema);

export { UserNotification };
