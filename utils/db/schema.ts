import {
  integer,
  varchar,
  pgTable,
  serial,
  text,
  timestamp,
  jsonb,
  boolean,
} from "drizzle-orm/pg-core";

/**
 * Users 表: 存储用户信息，包括邮箱、用户名和创建时间。
 * Reports 表: 存储用户报告的信息，包括位置、垃圾类型和状态。
 * ewards 表: 存储用户奖励的信息，包括积分、等级和描述
 * CollectedWastes 表: 存储收集的垃圾信息，包括报告 ID、收集者 ID 和收集日期。
 * Notifications 表: 存储用户通知信息，包括消息、类型和是否已读状态。
 * ransactions 表: 存储用户交易信息，包括交易类型、金额和描述。
 */

// Users table
export const Users = pgTable("users", {
  id: serial("id").primaryKey(), // 用户唯一标识符，自动递增
  email: varchar("email", { length: 255 }).notNull().unique(), // 用户邮箱，唯一且不能为空
  name: varchar("name", { length: 255 }).notNull(), // 用户名，不能为空
  createdAt: timestamp("created_at").defaultNow().notNull(), // 创建时间，默认为当前时间，不能为空
});

// Reports table
export const Reports = pgTable("reports", {
  id: serial("id").primaryKey(), // 报告唯一标识符，自动递增
  userId: integer("user_id")
    .references(() => Users.id) // 外键，引用 Users 表的 id 字段
    .notNull(), // 不能为空
  location: text("location").notNull(), // 报告位置，不能为空
  wasteType: varchar("waste_type", { length: 255 }).notNull(), // 垃圾类型，不能为空
  amount: varchar("amount", { length: 255 }).notNull(), // 垃圾数量，不能为空
  imageUrl: text("image_url"), // 报告图片的 URL，可选
  verificationResult: jsonb("verification_result"), // 验证结果，使用 JSONB 类型存储
  status: varchar("status", { length: 255 }).notNull().default("pending"), // 报告状态，默认为 'pending'
  createdAt: timestamp("created_at").defaultNow().notNull(), // 创建时间，默认为当前时间，不能为空
  collectorId: integer("collector_id").references(() => Users.id), // 外键，引用 Users 表的 id 字段，表示收集者
});

// Rewards table
export const Rewards = pgTable("rewards", {
  id: serial("id").primaryKey(), // 奖励唯一标识符，自动递增
  userId: integer("user_id")
    .references(() => Users.id) // 外键，引用 Users 表的 id 字段
    .notNull(), // 不能为空
  points: integer("points").notNull().default(0), // 积分，默认为 0
  level: integer("level").notNull().default(1), // 等级，默认为 1
  createdAt: timestamp("created_at").defaultNow().notNull(), // 创建时间，默认为当前时间，不能为空
  updatedAt: timestamp("updated_at").defaultNow().notNull(), // 更新时间，默认为当前时间，不能为空
  isAvailable: boolean("is_available").notNull().default(true), // 奖励是否可用，默认为 true
  description: text("description"), // 奖励描述，可选
  name: varchar("name", { length: 255 }).notNull(), // 奖励名称，不能为空
  collectionInfo: text("collection_info").notNull(), // 收集信息，不能为空
});

// CollectedWastes table
export const CollectedWastes = pgTable("collected_wastes", {
  id: serial("id").primaryKey(), // 收集的垃圾唯一标识符，自动递增
  reportId: integer("report_id")
    .references(() => Reports.id) // 外键，引用 Reports 表的 id 字段
    .notNull(), // 不能为空
  collectorId: integer("collector_id")
    .references(() => Users.id) // 外键，引用 Users 表的 id 字段
    .notNull(), // 不能为空
  collectionDate: timestamp("collection_date").notNull(), // 收集日期，不能为空
  status: varchar("status", { length: 20 }).notNull().default("collected"), // 收集状态，默认为 'collected'
});

// Notifications table
export const Notifications = pgTable("notifications", {
  id: serial("id").primaryKey(), // 通知唯一标识符，自动递增
  userId: integer("user_id")
    .references(() => Users.id) // 外键，引用 Users 表的 id 字段
    .notNull(), // 不能为空
  message: text("message").notNull(), // 通知消息，不能为空
  type: varchar("type", { length: 50 }).notNull(), // 通知类型，不能为空
  isRead: boolean("is_read").notNull().default(false), // 是否已读，默认为 false
  createdAt: timestamp("created_at").defaultNow().notNull(), // 创建时间，默认为当前时间，不能为空
});

// Transactions table
export const Transactions = pgTable("transactions", {
  id: serial("id").primaryKey(), // 交易唯一标识符，自动递增
  userId: integer("user_id")
    .references(() => Users.id) // 外键，引用 Users 表的 id 字段
    .notNull(), // 不能为空
  type: varchar("type", { length: 20 }).notNull(), // 交易类型，'earned' 或 'redeemed'
  amount: integer("amount").notNull(), // 交易金额，不能为空
  description: text("description").notNull(), // 交易描述，不能为空
  date: timestamp("date").defaultNow().notNull(), // 交易日期，默认为当前时间，不能为空
});
