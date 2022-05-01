import type { NextApiRequest, NextApiResponse } from "next";
import me from "../../../public/me.json";
import { APIUser, Routes } from "discord-api-types/v9";
import axios from "axios";
import { fileTypeFromBuffer } from "file-type";

let avatar: Buffer;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const sendAvatar = () =>
    fileTypeFromBuffer(avatar).then(({ mime }: any) => {
      res.setHeader("Content-Type", mime);
      res.send(avatar);
    });

  axios
    .get("https://discord.com/api/v9" + Routes.user(me.id), {
      headers: { authorization: `Bot ${process.env.BOT_TOKEN}` },
    })
    .then(({ data: user }: { data: APIUser }) => {
      const animated = user.avatar?.startsWith("a_");
      axios
        .get(
          `https://cdn.discordapp.com/avatars/${me.id}/${user.avatar}.${
            animated ? "gif" : "webp"
          }?size=512`,
          { responseType: "arraybuffer" }
        )
        .then(({ data: avatarData }) => {
          avatar = Buffer.from(avatarData, "binary");
          sendAvatar();
        })
        .catch(sendAvatar);
    })
    .catch(sendAvatar);
};

export default handler;
