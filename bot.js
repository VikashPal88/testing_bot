const { Telegraf, Markup } = require("telegraf");
require("dotenv").config(); // Load env variables

const bot = new Telegraf(process.env.BOT_TOKEN);

// /start command
bot.start((ctx) => {
  ctx.reply(
    "Welcome to Physics Wallah Chatbot! Choose an option below:",
    Markup.inlineKeyboard([
      [
        Markup.button.callback("📚 Classes", "classes"),
        Markup.button.callback("🎯 Exams", "exams"),
      ],
      [Markup.button.callback("🏫 Centers", "centers")],
    ])
  );
});

// Handle 📚 Classes
bot.action("classes", async (ctx) => {
  try {
    await ctx.answerCbQuery(); // Acknowledge the button press
    await ctx.reply(
      "Select your class:",
      Markup.inlineKeyboard([
        [
          Markup.button.callback("9th", "class_9"),
          Markup.button.callback("10th", "class_10"),
        ],
        [
          Markup.button.callback("11th", "class_11"),
          Markup.button.callback("12th", "class_12"),
        ],
        [Markup.button.callback("🔙 Back to Menu", "back_to_menu")],
      ])
    );
  } catch (error) {
    console.error("Error in classes action:", error);
  }
});

// Handle 🎯 Exams
bot.action("exams", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.reply(
      "Select your exam:",
      Markup.inlineKeyboard([
        [
          Markup.button.callback("JEE", "exam_jee"),
          Markup.button.callback("NEET", "exam_neet"),
        ],
        [
          Markup.button.callback("GATE", "exam_gate"),
          Markup.button.callback("Defence", "exam_defence"),
          Markup.button.callback("UPSC", "exam_upsc"),
        ],
        [Markup.button.callback("🔙 Back to Menu", "back_to_menu")],
      ])
    );
  } catch (error) {
    console.error("Error in exams action:", error);
  }
});

// Handle 🏫 Centers
bot.action("centers", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.reply(
      "Select your center/state:",
      Markup.inlineKeyboard([
        [
          Markup.button.callback("Delhi", "center_delhi"),
          Markup.button.callback("Kota", "center_kota"),
        ],
        [
          Markup.button.callback("Lucknow", "center_lucknow"),
          Markup.button.callback("Patna", "center_patna"),
        ],
        [
          Markup.button.callback("Mumbai", "center_mumbai"),
          Markup.button.callback("Bhopal", "center_bhopal"),
        ],
        [Markup.button.callback("🔙 Back to Menu", "back_to_menu")],
      ])
    );
  } catch (error) {
    console.error("Error in centers action:", error);
  }
});

// Handle 🔙 Back to Menu
bot.action("back_to_menu", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.reply(
      "Welcome back! Choose an option:",
      Markup.inlineKeyboard([
        [
          Markup.button.callback("📚 Classes", "classes"),
          Markup.button.callback("🎯 Exams", "exams"),
        ],
        [Markup.button.callback("🏫 Centers", "centers")],
      ])
    );
  } catch (error) {
    console.error("Error in back_to_menu action:", error);
  }
});

// 📚 Showing class templates when user selects a class
const classDetails = {
  class_9: {
    imageUrl:
      "https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/363a10dd-39a6-47a5-b52e-b70a88b7bc13.png",
    caption:
      "📚 *9th Class Details*\n\n💰 Price: ₹25,000\n⏰ Timing: 4 PM - 7 PM\n📍 Location: Delhi Center",
    enrollUrl: "https://www.pw.live/school-prep/class-9/batches",
  },
  class_10: {
    imageUrl:
      "https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/50118566-00d9-4507-b514-7b86a226caf8.png",
    caption:
      "📚 *10th Class Details*\n\n💰 Price: ₹28,000\n⏰ Timing: 5 PM - 8 PM\n📍 Location: Delhi Center",
    enrollUrl: "https://www.pw.live/school-prep/class-10/batches",
  },
  class_11: {
    imageUrl:
      "https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/55cc6a84-c016-4705-8e1c-e279c0b2e41b.png",
    caption:
      "📚 *11th Class Details*\n\n💰 Price: ₹30,000\n⏰ Timing: 3 PM - 6 PM\n📍 Location: Delhi Center",
    enrollUrl: "https://www.pw.live/school-prep/class-11/batches",
  },
  class_12: {
    imageUrl:
      "https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/885724d1-5548-4e71-a2ed-b3fd30ec7869.jpg",
    caption:
      "📚 *12th Class Details*\n\n💰 Price: ₹3,500\n⏰ Timing: 6 PM - 9 PM\n📍 Location: Delhi Center\n Duration: 1 Year",
    enrollUrl: "https://www.pw.live/school-prep/class-12/batches",
  },
};

// 📚 Showing exam templates when user selects an exam
const examDetails = {
  exam_jee: [
    {
      imageUrl:
        "https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/f5255148-c044-406f-abf1-e8a1530e1423.jpg",
      caption:
        "🚀 *Class 11 IIT JEE Courses*\n\n💰 Price: ₹4,999\n📅 Duration: 3 Months",
      enrollUrl: "https://www.pw.live/iit-jee/batches",
    },
    {
      imageUrl:
        "https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/b0fd6211-8861-469d-b446-e16295ddb6c4.jpg",
      caption:
        "🚀 *Class 12 IIT JEE Courses*\n\n💰 Price: ₹4,999\n📅 Duration: 6 Months",
      enrollUrl: "https://www.pw.live/iit-jee/batches",
    },
    {
      imageUrl:
        "https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/a6c8595b-fd38-497f-a547-9c94be65948e.jpg",
      caption:
        "🚀 *Dropper IIT JEE Courses*\n\n💰 Price: ₹4,999\n📅 Duration: 6 Months",
      enrollUrl: "https://www.pw.live/iit-jee/batches",
    },
  ],
  exam_neet: [
    {
      imageUrl:
        "https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/f8044c91-1f35-4b29-9dde-b4dca8d3e75e.jpg",
      caption:
        "🧬 *Class 11 NEET Courses* \n Lakshya NEET 2026 \n\n💰 Price: ₹15,000\n📅 Duration: 6 Months",
      enrollUrl: "https://www.pw.live/neet/batches",
    },
    {
      imageUrl:
        "https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/c89c4a74-374c-44e5-9041-ffe88aa3746a.jpg",
      caption:
        "🧬 *Class 12 NEET Courses* \nArjuna NEET 2026 \n\n💰 Price: ₹15,000\n📅 Duration: 6 Months",
      enrollUrl: "https://www.pw.live/neet/batches",
    },
    {
      imageUrl:
        "https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/be75f885-3d8f-4903-9d81-de41bd8455b7.jpg",
      caption:
        "🧬 *Dropper NEET Courses* \nYakeen NEET 2026 \n\n💰 Price: ₹15,000\n📅 Duration: 6 Months",
      enrollUrl: "https://www.pw.live/neet/batches",
    },
  ],
  exam_gate: [
    {
      imageUrl:
        "https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/cf7b5b2f-c11b-499d-bb50-9de118de3018.png",
      caption:
        "🧬 *Civil GATE Courses* \nVijay GATE 2026 Rank Improvement Batch B - Civil \n\n💰 Price: ₹15,000\n📅 Duration: 6 Months",
      enrollUrl: "https://www.pw.live/gate/batches",
    },
    {
      imageUrl:
        "https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/4e8800fe-2643-4337-b8c5-0bad698f4796.png",
      caption:
        "🧬 *Mechanical GATE Courses* \narakram GATE 2026 Batch - (Hinglish) - \n\n💰 Price: ₹15,000\n📅 Duration: 6 Months",
      enrollUrl: "https://www.pw.live/gate/batches",
    },
    {
      imageUrl:
        "https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/be75f885-3d8f-4903-9d81-de41bd8455b7.jpg",
      caption:
        "🧬 *CS GATE Courses* \nParakram 2.0 GATE 2026 + PSUs + Pl \n\n💰 Price: ₹15,000\n📅 Duration: 6 Months",
      enrollUrl: "https://www.pw.live/gate/batches",
    },
    {
      imageUrl:
        "https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/19d304df-2be7-4912-a4d4-876ea0f1d614.png",
      caption:
        "🧬 *Electronics GATE Courses* \nVijay GATE 2026 Rank Improvement Batch B - \n\n💰 Price: ₹15,000\n📅 Duration: 6 Months",
      enrollUrl: "https://www.pw.live/gate/batches",
    },
  ],
  // Add more exams similarly...
};

// Handle exam details
Object.keys(examDetails).forEach((examKey) => {
  bot.action(examKey, (ctx) => showExamDetails(ctx, examKey));
});

// Common handler for class selection
const showClassDetails = async (ctx, classKey) => {
  try {
    await ctx.answerCbQuery();
    const { imageUrl, caption, enrollUrl } = classDetails[classKey];
    await ctx.replyWithPhoto(
      { url: imageUrl },
      {
        caption,
        parse_mode: "Markdown",
        ...Markup.inlineKeyboard([
          [Markup.button.url("Enroll Now", enrollUrl)],
          [Markup.button.callback("🔙 Back to Classes", "classes")],
        ]),
      }
    );
  } catch (error) {
    console.error("Error in showClassDetails:", error);
  }
};

// Common handler for exam selection
const showExamDetails = async (ctx, examKey) => {
  try {
    await ctx.answerCbQuery();
    const banners = examDetails[examKey];
    for (const banner of banners) {
      await ctx.replyWithPhoto(
        { url: banner.imageUrl },
        {
          caption: banner.caption,
          parse_mode: "Markdown",
          ...Markup.inlineKeyboard([
            [Markup.button.url("Enroll Now", banner.enrollUrl)],
            [Markup.button.callback("🔙 Back to Exams", "exams")],
          ]),
        }
      );
    }
  } catch (error) {
    console.error("Error in showExamDetails:", error);
  }
};

// Handle class details
Object.keys(classDetails).forEach((classKey) => {
  bot.action(classKey, (ctx) => showClassDetails(ctx, classKey));
});

// Start the bot
bot
  .launch()
  .then(() => console.log("Bot is running..."))
  .catch((error) => console.error("Bot launch error:", error));
