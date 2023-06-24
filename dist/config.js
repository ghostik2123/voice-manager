"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guilds = exports.cooldownVoiceJoin = exports.intents = exports.internal = void 0;
const discord_js_1 = require("discord.js");
exports.internal = {
    token: 'MTA2NDU5MzkxNjA4ODgxOTgxMw.GWhlKY.sa0LroSMPibcy92zL7WO1G4cQiRpzx7f-MVlb8',
    mongoURL: 'mongodb+srv://serpentluv423:AxrqdzDftWgzxMph@cluster0.nftrems.mongodb.net/' // Ссылка на базы данных MongoDB (https://www.mongodb.com/)
};
exports.intents = 131071; // Все интенты
exports.cooldownVoiceJoin = 0;
exports.guilds = new discord_js_1.Collection()
    .set('959711709117960193', // ID Сервера
{
    defaultName: '⭐ {username}',
    message: '1122146644402651256',
    style: discord_js_1.ButtonStyle.Secondary,
    channels: {
        text: '1122146475007299584',
        voice: '959711709700952119',
        category: '959711709700952117' // ID категории где будут создаваться приватные комнаты
    },
    line: 'https://s.string.url',
    color: 0x2f3136,
    dot: undefined,
    buttons: {
        'rename': {
            emoji: '✏️',
            title: 'Изменить название комнаты'
        },
        'limit': {
            emoji: '👥',
            title: 'Установить лимит пользователей'
        },
        'close': {
            emoji: '🔒',
            title: 'Закрыть/открыть доступ в комнату'
        },
        'hide': {
            emoji: '👁️',
            title: 'Скрыть/раскрыть комнату для всех'
        },
        'user': {
            emoji: '💋',
            title: 'Забрать/выдать доступ к комнате пользователю'
        },
        'speak': {
            emoji: '🔈',
            title: 'Забрать/выдать право говорить пользователю'
        },
        'kick': {
            emoji: '🤢',
            title: 'Выгнать пользователя из комнаты'
        },
        'reset': {
            emoji: '✂️',
            title: 'Сбросить права пользователю'
        },
        'owner': {
            emoji: '👑',
            title: 'Сделать пользователя новым владельцем'
        },
        'info': {
            emoji: '📔',
            title: 'Информация о комнате'
        }
    },
    placeholder: {
        user: '🔷 Выберите пользователя',
        channel: '🔷 Выберите приватную комнату'
    }
});
