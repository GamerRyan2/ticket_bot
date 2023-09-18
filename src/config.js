import Discord from "discord.js";
const { ButtonStyle, TextInputStyle } = Discord;

export default {
  PREFIX: "un!",
  TOKEN: "MTE1MDc1Mjg2MTE2MDk5NjkwNA.GdXvyY.noYm4ZztzlXOPuM4h0zbD_RET7MfCuv_vmv_uE",
  ACTIVITY: { NAME: "UniversalMC", TYPE: "PLAYING" },
  GUILD_ID: "1143150215004692480",
  TICKET: {
    CHANNEL: "1145743823729856562",
    CATEGORY: "1149672947917803622",
    ARCHIVE_CATEGORY: "1151234125534089336",
    MESSAGE: "Benvenuto su **Universal Community**\n\n **__Quando aprirai un ticket dovrai inserire un motivo dell'apertura__**. Puoi scrivere, per esempio, partnership per eseguire una **__partnership__**.\n\n Ci sono delle regole per i ticket:\n\n • **Non aprire ticket inutili.\n• Sii educato e responsabile.\n •Rispondere nel ticket entro le 48 ore**",
    STAFF_ROLES: ["1144689533464629289"],
    BUTTONS: [
      {
        STYLE: ButtonStyle.Success,
        LABEL: "Claim Ticket",
        EMOTE: "✅",
        ID: "successTicket",
        DISABLED: false,
      },
      {
        STYLE: ButtonStyle.Secondary,
        LABEL: "Archivia Ticket",
        EMOTE: "🎫",
        ID: "archiveTicket",
        DISABLED: false,
      },
      {
        STYLE: ButtonStyle.Danger,
        LABEL: "Elimina Ticket",
        EMOTE: "🎟️",
        ID: "deleteTicket",
        DISABLED: false,
      },
    ],
    QUESTIONS: [
      {
        ID: "name",
        LABEL: "Come ti chiami?",
        STYLE: TextInputStyle.Short,
        MIN_LENGTH: 0,
        MAX_LENGTH: 16,
        PLACE_HOLDER: "Devi scrivere il tuo nome",
        REQUIRED: true,
      },
      {
        ID: "reason",
        LABEL: "Perchè ha aperto un ticket?",
        STYLE: TextInputStyle.Short,
        MIN_LENGTH: 0,
        MAX_LENGTH: 16,
        PLACE_HOLDER: "Scrivi il motivo per cui hai aperto il ticket.",
        REQUIRED: true,
      },
    ],
  },
};
