WA.openPopup("popupRectangle", 'Dieser Server ist privat gehostet, soweit es hobbymäßig möglich ist wurden alle Maßnahmen getroffen, dass möglichst keine Personen- und IP-bezogenen Daten gespeichert werden. Für Details schau bitte in die aktuelle Dokumentation zu den Docker Containern von Workadventure und Jitsi', [{ label: "Verstanden", className: "primary", callback: (popup) => { WA.restorePlayerControls(); popup.close(); } }]);

WA.onEnterZone('welcomesign', () => { WA.disablePlayerControls(); WA.openPopup("popupRectangle", 'Willkommen auf dem WorkAdventure Server von Olex\n Im Außenbereich (außer Raucherecke), den Gängen und den beiden südlichen großen Räumen kannst du dich mit Leuten in deiner Nähe unterhalten.\n Wenn du eine Weile weg bist kannst du in den Keller im Norden, dort stört niemand, auch in direkter Nähe.\n In allen anderen Räumen kann jeder mit jedem im Raum reden, in größeren Räumen musst du das Beitreten erst bestätigen. \n Bei Fragen oder Problemen wende dich an Olex.\n\nViel Spaß!', [{ label: "Alles klar", className: "primary", callback: (popup) => { WA.restorePlayerControls(); popup.close(); } }]); });

WA.onEnterZone('silent', () => { WA.sendChatMessage('Hier im Keller darf man nicht reden, sonst weckt man die Geister auf!\n Hier kann dich also niemand stören.', 'Schild'); });

WA.onEnterZone('buchclub', () => { WA.sendChatMessage('Willkommen in der Bibliothek.', 'Schild'); });

WA.onEnterZone('raucherecke', () => { WA.sendChatMessage('Raucherbereich. Bitte die Kippenstummel in den Aschenbecher werfen.'', 'Schild'); });
