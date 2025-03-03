import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
const DISCORD_USER_ID = process.env.DISCORD_USER_ID;
const DISCORD_CHANNEL_ID = process.env.DISCORD_CHANNEL_ID;

if (!DISCORD_BOT_TOKEN || !DISCORD_USER_ID) {
  throw new Error("❌ Missing DISCORD_BOT_TOKEN or DISCORD_USER_ID in .env");
}

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.once("ready", async () => {
  console.log(`✅ Logged in as ${client.user?.tag}!`);
  try {
    const user = await client.users.fetch(process.env.DISCORD_USER_ID);
    const channel = await user.createDM();

    if (!channel?.isTextBased()) {
      throw new Error("❌ Invalid channel ID or channel is not a text channel");
    }

    await channel.send(
      "✅ **Deployment Cafe Corner project successful onto Netlify!** 🎉"
    );
  } catch (error) {
    console.error("❌ Error sending DM:", error);
  }

  client.destroy();
  process.exit();
});

client.login(DISCORD_BOT_TOKEN);
