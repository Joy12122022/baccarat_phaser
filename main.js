var config = {
    type: Phaser.AUTO,
    width: 720,
    height: 650,
    transparent : true,
    scene: {
        preload: preload,
        create: create,
        update: update,
    },
};

var game = new Phaser.Game(config);
function preload() {
    this.load.image("bg", "assets/smallsize/board_half.png");
    this.load.image("999frame", "assets/smallsize/999_frame.png");
    this.load.image("label_player", "assets/smallsize/label_player.png");
    this.load.image("player", "assets/smallsize/player.png");
    this.load.image("bar_backing", "assets/smallsize/bar_backing.png");
    this.load.image("label_tie", "assets/smallsize/label_tie.png");
    this.load.image("tie", "assets/smallsize/tie.png");
    this.load.image("label_banker", "assets/smallsize/label_banker.png");
    this.load.image("banker", "assets/smallsize/banker.png");
    this.load.image("text_Player", "assets/smallsize/text_Player.png");
    this.load.image("text_Player_cn", "assets/smallsize/text_Player_cn.png");
    this.load.image("text_Banker", "assets/smallsize/text_Banker.png");
    this.load.image("text_Banker_cn", "assets/smallsize/text_Banker_cn.png");
    this.load.image("default_sprite_splash", "assets/smallsize/default_sprite_splash.png");
    this.load.image("roadmap_B", "assets/smallsize/roadmap_B.png");
    this.load.image("roadmap_P", "assets/smallsize/roadmap_P.png");
    this.load.image("roadmap_T", "assets/smallsize/roadmap_T.png");
    this.load.image("Rounded_10", "assets/smallsize/Rounded_10.png");
    this.load.image("people_icon", "assets/smallsize/people_icon.png");
    this.load.image("timer", "assets/smallsize/timer.png");
    this.load.image("bt_blue", "assets/smallsize/bt_blue.png");
    this.load.image("history_icon", "assets/smallsize/history_icon.png");
    this.load.image("info_icon", "assets/smallsize/info_icon.png");
    this.load.image("bt_square", "assets/smallsize/bt_square.png");
    this.load.image("V_up", "assets/smallsize/V_up.png");
    this.load.image("bt_x", "assets/smallsize/bt_x.png");
    this.load.image("logo", "assets/smallsize/logo.png");
    this.load.image("hamburger_bt", "assets/smallsize/hamburger_bt.png");
    this.load.image("bt_red", "assets/smallsize/bt_red.png");
    this.load.image("bt_green", "assets/smallsize/bt_green.png");
    this.load.image("arrow_bt", "assets/smallsize/arrow_bt.png");
    this.load.image("chip_glow", "assets/smallsize/chip_glow.png");
}

function create() {
    //// background
    this.add.image(192, 325, "bg");
    this.add.image(528, 325, "bg").setScale(-1, 1);

    var text_Player = this.add.image(237, 113, "text_Player");
    text_Player.setAlpha(0.2);
    var text_Player_cn = this.add.image(237, 179, "text_Player_cn");
    text_Player_cn.setAlpha(0.2);
    var text_Banker = this.add.image(483, 113, "text_Banker");
    text_Banker.setAlpha(0.2);
    var text_Banker_cn = this.add.image(483, 179, "text_Banker_cn");
    text_Banker_cn.setAlpha(0.2);
    var line = this.add.nineslice(360, 175, "default_sprite_splash", null, 164, 3, 0, 0, 0, 0);
    line.setAngle(90);
    line.setAlpha(0.2);

    //// betManager
    // player_option
    this.add.nineslice(172, 365, "999frame", null, 178, 126, 43, 8, 35, 12);
    this.add.image(172, 339, "label_player");
    this.add.image(172, 388, "player");

    this.add.text(155, 400, "1 : 1", { fontFamily: "MyriadPro-Semibold", fontSize: "24px", color: "#ffffff" });

    var text1 = this.add.text(83, 306, "0", { fontFamily: "MyriadPro-Semibold", fontSize: "24px", color: "#EBC026" });
    text1.setAngle(-40);

    this.add.text(230, 406, "55%", { fontFamily: "MyriadPro-Bold", fontSize: "14px", color: "#ffffff" });

    this.add.image(242, 363, "bar_backing");

    // tie_option
    this.add.nineslice(360, 365, "999frame", null, 178, 126, 43, 8, 35, 12);
    this.add.image(360, 339, "label_tie");
    this.add.image(360, 388, "tie");
    this.add.text(343, 400, "1 : 1", { fontFamily: "MyriadPro-Semibold", fontSize: "24px", color: "#ffffff" });

    var text2 = this.add.text(271, 306, "0", { fontFamily: "MyriadPro-Semibold", fontSize: "24px", color: "#EBC026" });
    text2.setAngle(-40);

    //banker_option
    this.add.nineslice(548, 365, "999frame", null, 178, 126, 43, 8, 35, 12);
    this.add.image(548, 339, "label_banker");
    this.add.image(548, 388, "banker");

    this.add.text(531, 400, "1 : 1", { fontFamily: "MyriadPro-Semibold", fontSize: "24px", color: "#ffffff" });

    var text3 = this.add.text(455, 303, "0", { fontFamily: "MyriadPro-Semibold", fontSize: "24px", color: "#EBC026" });
    text3.setAngle(-40);

    this.add.text(607, 406, "55%", { fontFamily: "MyriadPro-Bold", fontSize: "14px", color: "#ffffff" });

    this.add.image(619, 363, "bar_backing");

    // chip bet
    this.add.image(92, 570, "bt_red");
    this.add.image(627, 569, "bt_green");
    this.add.image(179, 570, "arrow_bt");
    this.add.image(540, 570, "arrow_bt").setScale(-1, 1);
    this.add.image(360, 570, "chip_glow");

    //// chart History
    this.add.image(97.15, 507, "roadmap_B");
    this.add.image(134.7, 507, "roadmap_T");
    this.add.image(172.25, 507, "roadmap_P");
    this.add.image(209.8, 507, "roadmap_P");
    this.add.image(247.35, 507, "roadmap_B");
    this.add.image(284.9, 507, "roadmap_T");
    this.add.image(322.45, 507, "roadmap_P");
    this.add.image(360, 507, "roadmap_P");
    this.add.image(397.55, 507, "roadmap_B");
    this.add.image(435.1, 507, "roadmap_T");
    this.add.image(472.65, 507, "roadmap_P");
    this.add.image(510.2, 507, "roadmap_P");
    this.add.image(547.75, 507, "roadmap_B");
    this.add.image(585.3, 507, "roadmap_T");
    this.add.image(622.85, 507, "roadmap_P");

    //// ratio Result
    this.add.text(87, 466, "B:", { fontFamily: "MyriadPro-Bold", fontSize: "20px", color: "#FF1744" });
    this.add.text(114, 466, "22", { fontFamily: "MyriadPro-Bold", fontSize: "20px", color: "#FFFFFF" });
    this.add.text(142, 466, "P:", { fontFamily: "MyriadPro-Bold", fontSize: "20px", color: "#42A5F5" });
    this.add.text(169, 466, "22", { fontFamily: "MyriadPro-Bold", fontSize: "20px", color: "#FFFFFF" });
    this.add.text(197, 466, "T:", { fontFamily: "MyriadPro-Bold", fontSize: "20px", color: "#66BB6A" });
    this.add.text(224, 466, "22", { fontFamily: "MyriadPro-Bold", fontSize: "20px", color: "#FFFFFF" });
    this.add.text(555, 466, "Total", { fontFamily: "MyriadPro-Bold", fontSize: "20px", color: "#FFFFFF" });
    this.add.text(604, 466, "66", { fontFamily: "MyriadPro-Bold", fontSize: "20px", color: "#FFFFFF" });

    //// room Info
    var Rounded_10 = this.add.nineslice(75, 127, "Rounded_10", null, 114, 45, 10, 10, 10, 10);
    Rounded_10.setTint(0x004c63);
    Rounded_10.setAlpha(0.8);
    this.add.image(40, 127, "people_icon");
    this.add.text(85, 105, "99", { fontFamily: "MyriadPro-Semibold", fontSize: "20px", color: "#EBC026" });
    this.add.text(65, 125, "Players", { fontFamily: "MyriadPro-Semibold", fontSize: "20px", color: "#EBC026" });

    // time
    this.add.image(472, 41, "timer");
    this.add.text(454, 18, "10", { fontFamily: "MyriadPro-Bold", fontSize: "35px", color: "#622300" });

    // menu
    this.add.image(46, 249, "bt_blue").setScale(1, -1);
    this.add.image(46, 348, "bt_blue");
    this.add.image(46, 254, "history_icon");
    this.add.image(46, 343, "info_icon");
    this.add.image(567, 41, "bt_square");
    this.add.image(567, 37, "V_up");
    this.add.image(665, 45, "bt_x");
    this.add.image(130, 52, "logo");

    // hamburger
    this.add.image(51, 427, "hamburger_bt");
}

function update() {}
