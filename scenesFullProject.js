//project title: Playable Scenarios (/Users/tiagomachado/Desktop/StudyCrafterDesktop/sc_projects/14_PlayableScenarios)
//cmd - shift - f (find/replace)
title = "Playable Scenarios"
scene1 = {"dictNodes":{"0":{"actionTarget":null,"actionName":"","name":"Start","next":"23112","tru":"True","idx":"0","posX":"-0.0834535","posY":"4.917664","minimized":"False","advance_mode":"Instantly","type":"start"},"23085":{"content":"You will be shown a series of scenarios. Please choose the action you wish to take in each. Make sure your volume is turned up.","owner":null,"speaking":"True","name":"Dialogue State","next":"23116","tru":"True","idx":"23085","posX":"6.701878","posY":"4.910092","minimized":"False","advance_mode":"OnClick","type":"dialogue"},"23102":{"nextScript":"living room","transitionText":"","variablePairs":"","name":"End Sticker","next":"-1","tru":"True","idx":"23102","posX":"13.95243","posY":"4.696779","minimized":"False","advance_mode":"OnClick","type":"end"},"23112":{"content":"Welcome!","owner":null,"speaking":"True","name":"Dialogue State","next":"23085","tru":"True","idx":"23112","posX":"3.317799","posY":"4.709574","minimized":"False","advance_mode":"OnClick","type":"dialogue"},"23116":{"content":"Click to continue.","owner":null,"speaking":"True","name":"Dialogue State","next":"23102","tru":"True","idx":"23116","posX":"10.63949","posY":"6.067517","minimized":"False","advance_mode":"OnClick","type":"dialogue"}},"scene":{"name":"Scene 1","title":"beginning","pos":{"x":0,"y":0,"z":0},"uid":"0","background":"grunge_1","furniture":[{"uid":0,"rotation":0,"visible":true,"locked":true,"color":"FFFFFF","textcolor":"000000","image":"grunge_1","value":0,"text":"","fontSize":0,"parentName":"","objectType":0,"name":"Background","pos":{"x":0,"y":0,"z":0},"size":{"x":960,"y":540}},{"uid":1,"rotation":340.740784,"visible":true,"locked":false,"color":"FFFFFF","textcolor":"000000","image":"paper_1","value":0,"text":"","fontSize":0,"parentName":"","objectType":0,"name":"paper_1","pos":{"x":-209.354752,"y":-12.6425247,"z":0},"size":{"x":177.749481,"y":219.854019}},{"uid":2,"rotation":334.965363,"visible":true,"locked":false,"color":"FFFFFF","textcolor":"000000","image":"paper_clip_1","value":0,"text":"","fontSize":0,"parentName":"","objectType":0,"name":"paper_clip_1","pos":{"x":26.5971069,"y":115.28051,"z":0},"size":{"x":94.30727,"y":99.119}},{"uid":3,"rotation":18.27812,"visible":true,"locked":false,"color":"FFFFFF","textcolor":"000000","image":"paper_3","value":0,"text":"","fontSize":0,"parentName":"","objectType":0,"name":"paper_3","pos":{"x":297.094,"y":-32.3157578,"z":0},"size":{"x":151.774933,"y":187.188766}}],"layoutScale":0.5,"layoutPosition":{"x":-4.60965824,"y":-9.374993},"scriptorScale":0.479338616,"scriptorPosition":{"x":-204.822327,"y":-126.193428},"layoutParamSet":true,"scriptorParamSet":true},"started":false}
scene2 = {"dictNodes":{"0":{"actionTarget":null,"actionName":"","name":"Start","next":"23128","tru":"True","idx":"0","posX":"-2.850426","posY":"4.526057","minimized":"False","advance_mode":"OnClick","type":"start"},"23128":{"choices":"23185~~true~-~23186~~true~-~","isRandom":"True","name":"If Sticker","next":"-1","tru":"True","idx":"23128","posX":"-0.8817196","posY":"3.654179","minimized":"False","advance_mode":"OnClick","type":"if"},"23129":{"action":"play_background","clipName":"Joyful","volume":"1","name":null,"next":"23137","tru":"True","idx":"23129","posX":"5.700894","posY":"4.452608","minimized":"False","advance_mode":"OnClick","type":"sound"},"23130":{"action":"play_background","clipName":"Hacer","volume":"1","name":null,"next":"23137","tru":"True","idx":"23130","posX":"5.420261","posY":"0.4918145","minimized":"False","advance_mode":"OnClick","type":"sound"},"23137":{"choiceType":"simple","content":"Your significant other forgot your birthday! Do you...","owner":"Background","speaking":"False","prompted":"True","choices":"23158~~Forgive them?~~False~~none~~true~-~23154~~Leave them?~~False~~none~~true~-~","variable":null,"name":null,"next":"-1","tru":"True","idx":"23137","posX":"8.356659","posY":"1.111481","minimized":"False","advance_mode":"OnClick","type":"choice"},"23142":{"nextScript":"ice cream","transitionText":"Interesting choice! On to the next scenario.","variablePairs":"","name":"End Sticker","next":"-1","tru":"True","idx":"23142","posX":"18.74344","posY":"0.9221503","minimized":"False","advance_mode":"OnClick","type":"end"},"23154":{"content":"We need to break up...","owner":"male_19","speaking":"True","name":"Dialogue State","next":"23211","tru":"True","idx":"23154","posX":"11.64281","posY":"-0.9231951","minimized":"False","advance_mode":"OnClick","type":"dialogue"},"23158":{"content":"It's ok, I know you didn't mean to forget.","owner":"male_19","speaking":"True","name":"Dialogue State","next":"23211","tru":"True","idx":"23158","posX":"12.16436","posY":"3.101447","minimized":"False","advance_mode":"OnClick","type":"dialogue"},"23185":{"displayName":null,"owner":"{SongRelax}","newValue":"0","fromVariable":"False","get":"True","name":"Variable Sticker","next":"23129","tru":"True","idx":"23185","posX":"2.544303","posY":"4.982708","minimized":"False","advance_mode":"OnClick","type":"variable"},"23186":{"displayName":null,"owner":"{SongTense}","newValue":"0","fromVariable":"False","get":"True","name":"Variable Sticker","next":"23130","tru":"True","idx":"23186","posX":"2.451747","posY":"0.4473617","minimized":"False","advance_mode":"OnClick","type":"variable"},"23211":{"action":"stop_background","clipName":"","volume":"1","name":null,"next":"23142","tru":"True","idx":"23211","posX":"15.50354","posY":"1.390851","minimized":"False","advance_mode":"OnClick","type":"sound"}},"scene":{"name":"Scene 1","title":"living room","pos":{"x":0,"y":0,"z":0},"uid":"1","background":"living_room_6","furniture":[{"uid":0,"rotation":0,"visible":true,"locked":true,"color":"FFFFFF","textcolor":"000000","image":"living_room_6","value":0,"text":"","fontSize":0,"parentName":"","objectType":0,"name":"Background","pos":{"x":0,"y":0,"z":0},"size":{"x":960,"y":540}},{"uid":1,"rotation":0,"visible":true,"locked":false,"color":"FFFFFF","textcolor":"000000","image":"male_19","value":0,"text":"","fontSize":0,"parentName":"","objectType":0,"name":"male_19","pos":{"x":-152.25,"y":-60.75,"z":0},"size":{"x":73,"y":281}},{"uid":2,"rotation":0,"visible":true,"locked":false,"color":"FFFFFF","textcolor":"000000","image":"female_20","value":0,"text":"","fontSize":0,"parentName":"","objectType":0,"name":"female_20","pos":{"x":72.75,"y":-64.5,"z":0},"size":{"x":-79,"y":282}}],"layoutScale":0.5,"layoutPosition":{"x":0,"y":0},"scriptorScale":0.360134244,"scriptorPosition":{"x":-273.572876,"y":7.828644},"layoutParamSet":true,"scriptorParamSet":true},"started":false}
scene3 = {"dictNodes":{"0":{"actionTarget":null,"actionName":"","name":"Start","next":"23163","tru":"True","idx":"0","posX":"0.8427418","posY":"2.224409","minimized":"False","advance_mode":"Instantly","type":"start"},"23163":{"choices":"23164~~true~-~23165~~true~-~","isRandom":"True","name":"If Sticker","next":"-1","tru":"True","idx":"23163","posX":"4.237494","posY":"1.572301","minimized":"False","advance_mode":"OnClick","type":"if"},"23164":{"action":"play_background","clipName":"Relaxer","volume":"1","name":null,"next":"23176","tru":"True","idx":"23164","posX":"8.458416","posY":"2.813658","minimized":"False","advance_mode":"OnClick","type":"sound"},"23165":{"action":"play_background","clipName":"Tense","volume":"1","name":null,"next":"23175","tru":"True","idx":"23165","posX":"7.871372","posY":"-0.4288951","minimized":"False","advance_mode":"OnClick","type":"sound"},"23171":{"choiceType":"simple","content":"An elderly man approaches you and asks if you have any spare change so he can buy some ice cream. Do you...","owner":"","speaking":"False","prompted":"True","choices":"23181~~Give him some change?~~False~~none~~true~-~23177~~Tell him you can't help him?~~False~~none~~true~-~","variable":null,"name":null,"next":"-1","tru":"True","idx":"23171","posX":"15.78499","posY":"0.6378622","minimized":"False","advance_mode":"OnClick","type":"choice"},"23175":{"displayName":null,"owner":"{SongTense}","newValue":"TrueT","fromVariable":"False","get":"True","name":"Variable Sticker","next":"23171","tru":"True","idx":"23175","posX":"11.49735","posY":"-1.192365","minimized":"False","advance_mode":"OnClick","type":"variable"},"23176":{"displayName":null,"owner":"{SongRelax}","newValue":"TrueR","fromVariable":"False","get":"True","name":"Variable Sticker","next":"23171","tru":"True","idx":"23176","posX":"11.7048","posY":"2.629157","minimized":"False","advance_mode":"OnClick","type":"variable"},"23177":{"content":"Sorry, I can't help you.","owner":"female_sitting_5","speaking":"True","name":"Dialogue State","next":"23179","tru":"True","idx":"23177","posX":"19.33635","posY":"-1.242171","minimized":"False","advance_mode":"OnClick","type":"dialogue"},"23179":{"content":"Oh, OK...","owner":"male_elderly_2","speaking":"True","name":"Dialogue State","next":"23215","tru":"True","idx":"23179","posX":"22.39339","posY":"-0.6516772","minimized":"False","advance_mode":"OnClick","type":"dialogue"},"23180":{"nextScript":"forest","transitionText":"Interesting choice! On to the next one.","variablePairs":"","name":"End Sticker","next":"-1","tru":"True","idx":"23180","posX":"27.75704","posY":"1.439657","minimized":"False","advance_mode":"OnClick","type":"end"},"23181":{"content":"Thanks, that's just what I needed!","owner":"male_elderly_2","speaking":"True","name":"Dialogue State","next":"23215","tru":"True","idx":"23181","posX":"19.9453","posY":"2.657551","minimized":"False","advance_mode":"OnClick","type":"dialogue"},"23215":{"action":"stop_background","clipName":"","volume":"1","name":null,"next":"23180","tru":"True","idx":"23215","posX":"24.3002","posY":"2.048604","minimized":"False","advance_mode":"OnClick","type":"sound"}},"scene":{"name":"Scene 1","title":"ice cream","pos":{"x":0,"y":0,"z":0},"uid":"2","background":"park_ice_cream_1","furniture":[{"uid":0,"rotation":0,"visible":true,"locked":true,"color":"FFFFFF","textcolor":"000000","image":"park_ice_cream_1","value":0,"text":"","fontSize":0,"parentName":"","objectType":0,"name":"Background","pos":{"x":0,"y":0,"z":0},"size":{"x":960,"y":540}},{"uid":1,"rotation":0,"visible":true,"locked":false,"color":"FFFFFF","textcolor":"000000","image":"male_elderly_2","value":0,"text":"","fontSize":0,"parentName":"","objectType":0,"name":"male_elderly_2","pos":{"x":43.2457,"y":-82.88145,"z":0},"size":{"x":86,"y":293}},{"uid":2,"rotation":0,"visible":true,"locked":false,"color":"FFFFFF","textcolor":"000000","image":"female_sitting_5","value":0,"text":"","fontSize":0,"parentName":"","objectType":0,"name":"female_sitting_5","pos":{"x":283.4005,"y":-80.93366,"z":0},"size":{"x":-127,"y":299}}],"layoutScale":0.5,"layoutPosition":{"x":0,"y":0},"scriptorScale":0.4793386,"scriptorPosition":{"x":-441.531067,"y":-15.204215},"layoutParamSet":true,"scriptorParamSet":true},"started":false}
scene4 = {
  "dictNodes": {
    "0": {
      "actionTarget": null,
      "actionName": "",
      "name": "Start",
      "next": "23189",
      "tru": "True",
      "idx": "0",
      "posX": "0",
      "posY": "0",
      "advance_mode": "Instantly",
      "type": "start"
    },
    "23189": {
      "choices": "23190~~true~-~23191~~true~-~",
      "isRandom": "True",
      "name": "If Sticker",
      "next": "-1",
      "tru": "True",
      "idx": "23189",
      "posX": "3.899206",
      "posY": "0.9365487",
      "advance_mode": "OnClick",
      "type": "if"
    },
    "23190": {
      "displayName": null,
      "owner": "{SongRelax}",
      "newValue": "0",
      "fromVariable": "False",
      "get": "True",
      "name": "Variable Sticker",
      "next": "23192",
      "tru": "True",
      "idx": "23190",
      "posX": "7.325229",
      "posY": "2.265078",
      "advance_mode": "OnClick",
      "type": "variable"
    },
    "23191": {
      "displayName": null,
      "owner": "{SongTense}",
      "newValue": "0",
      "fromVariable": "False",
      "get": "True",
      "name": "Variable Sticker",
      "next": "23193",
      "tru": "True",
      "idx": "23191",
      "posX": "7.232674",
      "posY": "-2.270269",
      "advance_mode": "OnClick",
      "type": "variable"
    },
    "23192": {
      "action": "play_background",
      "clipName": "Joyful",
      "volume": "1",
      "name": null,
      "next": "23194",
      "tru": "True",
      "idx": "23192",
      "posX": "10.48182",
      "posY": "1.734978",
      "advance_mode": "OnClick",
      "type": "sound"
    },
    "23193": {
      "action": "play_background",
      "clipName": "Hacer",
      "volume": "1",
      "name": null,
      "next": "23194",
      "tru": "True",
      "idx": "23193",
      "posX": "10.20119",
      "posY": "-2.225816",
      "advance_mode": "OnClick",
      "type": "sound"
    },
    "23194": {
      "choiceType": "simple",
      "content": "You found a weird creature during your walk in the forest! Do you...",
      "owner": "Background",
      "speaking": "False",
      "prompted": "True",
      "choices": "23195~~Report it to the authorities? It seems dangerous.~~False~~none~~true~-~23201~~Keep it a secret? It seems harmless.~~False~~none~~true~-~",
      "variable": null,
      "name": null,
      "next": "-1",
      "tru": "True",
      "idx": "23194",
      "posX": "13.13758",
      "posY": "-1.606149",
      "advance_mode": "OnClick",
      "type": "choice"
    },
    "23195": {
      "content": "Hello, police? I just found a strange creature...",
      "owner": "female_10",
      "speaking": "True",
      "name": "Dialogue State",
      "next": "23198",
      "tru": "True",
      "idx": "23195",
      "posX": "16.59502",
      "posY": "-1.006326",
      "advance_mode": "OnClick",
      "type": "dialogue"
    },
    "23198": {
      "actionTarget": "alien",
      "actionName": "MoveTo",
      "action_x-position": "550",
      "action_y-position": "300",
      "action_time": "2",
      "action_easing": "ease_in_out_quad",
      "name": null,
      "next": "23217",
      "tru": "True",
      "idx": "23198",
      "posX": "20.30797",
      "posY": "-1.699708",
      "advance_mode": "WhenCompleted",
      "type": "action"
    },
    "23199": {
      "nextScript": "kitchen",
      "transitionText": "Interesting choice. Just a couple more to go.",
      "variablePairs": "",
      "name": "End Sticker",
      "next": "-1",
      "tru": "True",
      "idx": "23199",
      "posX": "27.12441",
      "posY": "0.03715503",
      "advance_mode": "OnClick",
      "type": "end"
    },
    "23201": {
      "content": "Don't worry, I'll keep you safe",
      "owner": "female_10",
      "speaking": "True",
      "name": "Dialogue State",
      "next": "23202",
      "tru": "True",
      "idx": "23201",
      "posX": "16.35458",
      "posY": "-3.953204",
      "advance_mode": "OnClick",
      "type": "dialogue"
    },
    "23202": {
      "actionTarget": "alien",
      "actionName": "MoveTo",
      "action_x-position": "-250",
      "action_y-position": "-250",
      "action_time": "2",
      "action_easing": "ease_in_out_quad",
      "name": null,
      "next": "23217",
      "tru": "True",
      "idx": "23202",
      "posX": "19.6146",
      "posY": "-4.014714",
      "advance_mode": "WhenCompleted",
      "type": "action"
    },
    "23217": {
      "action": "stop_background",
      "clipName": "",
      "volume": "1",
      "name": null,
      "next": "23199",
      "tru": "True",
      "idx": "23217",
      "posX": "23.52518",
      "posY": "-0.2821632",
      "advance_mode": "OnClick",
      "type": "sound"
    }
  },
  "scene": {
    "name": "Scene 1",
    "title": "forest",
    "pos": {
      "x": 0.0,
      "y": 0.0,
      "z": 0.0,
      "magnitude": 0.0,
      "sqrMagnitude": 0.0
    },
    "uid": 3,
    "background": "forest_2",
    "furniture": [
      {
        "uid": 0,
        "rotation": 0.0,
        "visible": true,
        "locked": true,
        "color": "FFFFFF",
        "textcolor": "000000",
        "image": "forest_2",
        "value": 0.0,
        "text": "",
        "fontSize": 0,
        "parentName": "",
        "objectType": 0,
        "name": "Background",
        "pos": {
          "x": 0.0,
          "y": 0.0,
          "z": 0.0,
          "magnitude": 0.0,
          "sqrMagnitude": 0.0
        },
        "size": {
          "x": 960.0,
          "y": 540.0,
          "normalized": {
            "x": 0.871575534,
            "y": 0.490261227,
            "magnitude": 1.0,
            "sqrMagnitude": 1.0
          },
          "magnitude": 1101.45361,
          "sqrMagnitude": 1213200.0
        }
      },
      {
        "uid": 1,
        "rotation": 0.0,
        "visible": true,
        "locked": false,
        "color": "FFFFFF",
        "textcolor": "000000",
        "image": "female_10",
        "value": 0.0,
        "text": "",
        "fontSize": 0,
        "parentName": "",
        "objectType": 0,
        "name": "female_10",
        "pos": {
          "x": -374.683075,
          "y": -172.216232,
          "z": 0.0,
          "normalized": {
            "x": -0.908617437,
            "y": -0.417629421,
            "z": 0.0,
            "magnitude": 1.0,
            "sqrMagnitude": 1.0
          },
          "magnitude": 412.36615,
          "sqrMagnitude": 170045.844
        },
        "size": {
          "x": 73.0,
          "y": 277.0,
          "normalized": {
            "x": 0.254836947,
            "y": 0.966984034,
            "magnitude": 1.0,
            "sqrMagnitude": 1.0
          },
          "magnitude": 286.457672,
          "sqrMagnitude": 82058.0
        }
      },
      {
        "uid": 2,
        "rotation": 0.0,
        "visible": true,
        "locked": false,
        "color": "FFFFFF",
        "textcolor": "000000",
        "image": "rocket_1",
        "value": 0.0,
        "text": "",
        "fontSize": 0,
        "parentName": "",
        "objectType": 0,
        "name": "alien",
        "pos": {
          "x": 150.4071,
          "y": -64.77189,
          "z": 0.0,
          "normalized": {
            "x": 0.918454468,
            "y": -0.395526737,
            "z": 0.0,
            "magnitude": 1.0,
            "sqrMagnitude": 1.0
          },
          "magnitude": 163.7611,
          "sqrMagnitude": 26817.6953
        },
        "size": {
          "x": 115.915794,
          "y": 197.4563,
          "normalized": {
            "x": 0.506257534,
            "y": 0.862382352,
            "magnitude": 1.0,
            "sqrMagnitude": 1.0
          },
          "magnitude": 228.966064,
          "sqrMagnitude": 52425.46
        }
      }
    ],
    "layoutScale": 0.5,
    "layoutPosition": {
      "x": 0.0,
      "y": 0.0,
      "magnitude": 0.0,
      "sqrMagnitude": 0.0
    },
    "scriptorScale": 0.327394724,
    "scriptorPosition": {
      "x": -439.310822,
      "y": 71.9602356,
      "normalized": {
        "x": -0.9868485,
        "y": 0.1616483,
        "magnitude": 1.0,
        "sqrMagnitude": 1.00000012
      },
      "magnitude": 445.165436,
      "sqrMagnitude": 198172.266
    },
    "layoutParamSet": true,
    "scriptorParamSet": true
  },
  "started": false
}

scene5 = {"dictNodes":{"0":{"actionTarget":null,"actionName":"","name":"Start","next":"23204","tru":"True","idx":"0","posX":"-2.292465","posY":"3.091046","minimized":"False","advance_mode":"Instantly","type":"start"},"23204":{"choices":"23205~~true~-~23206~~true~-~","isRandom":"True","name":"If Sticker","next":"-1","tru":"True","idx":"23204","posX":"1.436845","posY":"2.30866","minimized":"False","advance_mode":"OnClick","type":"if"},"23205":{"displayName":null,"owner":"{SongRelax}","newValue":"0","fromVariable":"False","get":"True","name":"Variable Sticker","next":"23207","tru":"True","idx":"23205","posX":"5.499203","posY":"3.484468","minimized":"False","advance_mode":"OnClick","type":"variable"},"23206":{"displayName":null,"owner":"{SongTense}","newValue":"0","fromVariable":"False","get":"True","name":"Variable Sticker","next":"23208","tru":"True","idx":"23206","posX":"5.406647","posY":"-1.050879","minimized":"False","advance_mode":"OnClick","type":"variable"},"23207":{"action":"play_background","clipName":"Relaxer","volume":"1","name":null,"next":"23209","tru":"True","idx":"23207","posX":"8.655796","posY":"2.954369","minimized":"False","advance_mode":"OnClick","type":"sound"},"23208":{"action":"play_background","clipName":"Tense","volume":"1","name":null,"next":"23209","tru":"True","idx":"23208","posX":"8.375164","posY":"-1.006425","minimized":"False","advance_mode":"OnClick","type":"sound"},"23209":{"choiceType":"simple","content":"Some mice got into the kitchen and are eating the food! Do you...","owner":"Background","speaking":"False","prompted":"True","choices":"23220~~Scare them away?~~False~~none~~true~-~23227~~Let them eat?~~False~~none~~true~-~","variable":null,"name":null,"next":"-1","tru":"True","idx":"23209","posX":"13.13054","posY":"-0.3249879","minimized":"False","advance_mode":"OnClick","type":"choice"},"23220":{"actionTarget":"mouseleft","actionName":"Flip","action_horizontal":"True","action_vertical":"False","name":null,"next":"23221","tru":"True","idx":"23220","posX":"22.85494","posY":"-0.3126331","minimized":"False","advance_mode":"Instantly","type":"action"},"23221":{"actionTarget":"mouseleft","actionName":"MoveTo","action_x-position":"550","action_y-position":"-160","action_time":"2","action_easing":"ease_in_out_quad","name":null,"next":"23222","tru":"True","idx":"23221","posX":"26.29107","posY":"-2.650009","minimized":"False","advance_mode":"Instantly","type":"action"},"23222":{"actionTarget":"mouseright","actionName":"MoveTo","action_x-position":"550","action_y-position":"-210","action_time":"2","action_easing":"ease_in_out_quad","name":null,"next":"23223","tru":"True","idx":"23222","posX":"22.3417","posY":"-3.005324","minimized":"False","advance_mode":"Instantly","type":"action"},"23223":{"actionTarget":"male_chef_1","actionName":"MoveBy","action_y-difference":"0","action_x-difference":"170","action_time":"2","action_easing":"ease_in_out_quad","name":null,"next":"23225","tru":"True","idx":"23223","posX":"15.78866","posY":"2.33257","minimized":"False","advance_mode":"WhenCompleted","type":"action"},"23225":{"action":"stop_background","clipName":"","volume":"1","name":null,"next":"23226","tru":"True","idx":"23225","posX":"21.24874","posY":"2.857355","minimized":"False","advance_mode":"OnClick","type":"sound"},"23226":{"nextScript":"park","transitionText":"Interesting choice. Only one more left.","variablePairs":"","name":"End Sticker","next":"-1","tru":"True","idx":"23226","posX":"26.06267","posY":"3.577806","minimized":"False","advance_mode":"OnClick","type":"end"},"23227":{"actionTarget":"beet_1","actionName":"ChangeSize","action_height":"0","action_width":"0","action_time":"2","action_easing":"ease_in_out_quad","name":null,"next":"23225","tru":"True","idx":"23227","posX":"16.8196","posY":"-5.390183","minimized":"False","advance_mode":"WhenCompleted","type":"action"}},"scene":{"name":"Scene 1","title":"kitchen","pos":{"x":0,"y":0,"z":0},"uid":"4","background":"kitchen_1","furniture":[{"uid":0,"rotation":0,"visible":true,"locked":true,"color":"FFFFFF","textcolor":"000000","image":"kitchen_1","value":0,"text":"","fontSize":0,"parentName":"","objectType":0,"name":"Background","pos":{"x":0,"y":0,"z":0},"size":{"x":960,"y":540}},{"uid":1,"rotation":0,"visible":true,"locked":false,"color":"FFFFFF","textcolor":"000000","image":"beet_1","value":0,"text":"","fontSize":0,"parentName":"","objectType":0,"name":"beet_1","pos":{"x":77.8188,"y":-151.24501,"z":0},"size":{"x":57.9594345,"y":62.9273949}},{"uid":2,"rotation":0,"visible":true,"locked":false,"color":"FFFFFF","textcolor":"000000","image":"mouse_1","value":0,"text":"","fontSize":0,"parentName":"","objectType":0,"name":"mouseleft","pos":{"x":125.77887,"y":-156.294846,"z":0},"size":{"x":79.73801,"y":65.1000061}},{"uid":3,"rotation":359.319122,"visible":true,"locked":false,"color":"FFFFFF","textcolor":"000000","image":"mouse_1","value":0,"text":"","fontSize":0,"parentName":"","objectType":0,"name":"mouseright","pos":{"x":9.022114,"y":-156.825546,"z":0},"size":{"x":-79.73801,"y":65.1000061}},{"uid":4,"rotation":0,"visible":true,"locked":false,"color":"FFFFFF","textcolor":"000000","image":"male_chef_1","value":0,"text":"","fontSize":0,"parentName":"","objectType":0,"name":"male_chef_1","pos":{"x":-240.9435,"y":-1.85749388,"z":0},"size":{"x":85,"y":358}}],"layoutScale":0.5,"layoutPosition":{"x":0,"y":0},"scriptorScale":0.327394783,"scriptorPosition":{"x":-263.225952,"y":-8.898193},"layoutParamSet":true,"scriptorParamSet":true},"started":false}
scene6 = {"dictNodes":{"0":{"actionTarget":"None","actionName":"Visibility","action_hidden":"False","name":null,"next":"23251","tru":"True","idx":"0","posX":"-15.31145","posY":"4.598759","minimized":"False","advance_mode":"Instantly","type":"start"},"23237":{"choiceType":"simple","content":"Someone dropped a bag of coins! Do you...","owner":"Background","speaking":"False","prompted":"True","choices":"23256~~Take it?~~False~~none~~true~-~23272~~Return it?~~False~~none~~true~-~","variable":null,"name":null,"next":"-1","tru":"True","idx":"23237","posX":"10.77105","posY":"4.876316","minimized":"False","advance_mode":"OnClick","type":"choice"},"23238":{"actionTarget":"money_bag_1","actionName":"Visibility","action_hidden":"True","name":null,"next":"23245","tru":"True","idx":"23238","posX":"-1.625899","posY":"5.519518","minimized":"False","advance_mode":"Instantly","type":"action"},"23241":{"actionTarget":"standing","actionName":"Visibility","action_hidden":"True","name":null,"next":"23238","tru":"True","idx":"23241","posX":"-2.362727","posY":"1.164057","minimized":"False","advance_mode":"Instantly","type":"action"},"23245":{"actionTarget":"walking","actionName":"MoveTo","action_y-position":"-115.43","action_x-position":"203.95","action_time":"2","action_easing":"linear","name":null,"next":"23247","tru":"True","idx":"23245","posX":"1.206789","posY":"6.600193","minimized":"False","advance_mode":"WhenCompleted","type":"action"},"23246":{"actionTarget":"walking","actionName":"MoveTo","action_x-position":"530","action_y-position":"-115.43","action_time":"2","action_easing":"linear","name":null,"next":"23237","tru":"True","idx":"23246","posX":"7.42069","posY":"5.879745","minimized":"False","advance_mode":"WhenCompleted","type":"action"},"23247":{"actionTarget":"money_bag_1","actionName":"Visibility","action_hidden":"False","name":null,"next":"23246","tru":"True","idx":"23247","posX":"3.892112","posY":"7.680872","minimized":"False","advance_mode":"Instantly","type":"action"},"23250":{"displayName":null,"owner":"{SongRelax}","newValue":"0","fromVariable":"False","get":"True","name":"Variable Sticker","next":"23253","tru":"True","idx":"23250","posX":"-7.697537","posY":"8.88124","minimized":"False","advance_mode":"OnClick","type":"variable"},"23251":{"choices":"23250~~true~-~23252~~true~-~","isRandom":"True","name":"If Sticker","next":"-1","tru":"True","idx":"23251","posX":"-11.69172","posY":"7.762254","minimized":"False","advance_mode":"OnClick","type":"if"},"23252":{"displayName":null,"owner":"{SongTense}","newValue":"0","fromVariable":"False","get":"True","name":"Variable Sticker","next":"23254","tru":"True","idx":"23252","posX":"-7.790093","posY":"4.34589","minimized":"False","advance_mode":"OnClick","type":"variable"},"23253":{"action":"play_background","clipName":"Joyful","volume":"1","name":null,"next":"23241","tru":"True","idx":"23253","posX":"-4.54914","posY":"8.326576","minimized":"False","advance_mode":"OnClick","type":"sound"},"23254":{"action":"play_background","clipName":"Hacer","volume":"1","name":null,"next":"23241","tru":"True","idx":"23254","posX":"-4.83795","posY":"4.36578","minimized":"False","advance_mode":"OnClick","type":"sound"},"23256":{"actionTarget":"sitting","actionName":"Visibility","action_hidden":"True","name":null,"next":"23257","tru":"True","idx":"23256","posX":"24.64173","posY":"11.93293","minimized":"False","advance_mode":"Instantly","type":"action"},"23257":{"actionTarget":"standing","actionName":"Visibility","action_hidden":"False","name":null,"next":"23258","tru":"True","idx":"23257","posX":"25.03634","posY":"13.91656","minimized":"False","advance_mode":"Instantly","type":"action"},"23258":{"actionTarget":"standing","actionName":"Flip","action_horizontal":"True","action_vertical":"False","name":null,"next":"23259","tru":"True","idx":"23258","posX":"24.77714","posY":"11.18588","minimized":"False","advance_mode":"AfterTime_1","type":"action"},"23259":{"actionTarget":"standing","actionName":"Flip","action_horizontal":"True","action_vertical":"False","name":null,"next":"23260","tru":"True","idx":"23259","posX":"26.5312","posY":"10.37905","minimized":"False","advance_mode":"AfterTime_1","type":"action"},"23260":{"actionTarget":"standing","actionName":"MoveTo","action_x-position":"200","action_y-position":"-100.04","action_time":"2","action_easing":"ease_in_out_quad","name":null,"next":"23261","tru":"True","idx":"23260","posX":"26.21747","posY":"8.802897","minimized":"False","advance_mode":"WhenCompleted","type":"action"},"23261":{"actionTarget":"money_bag_1","actionName":"Visibility","action_hidden":"True","name":null,"next":"23262","tru":"True","idx":"23261","posX":"25.43881","posY":"9.958076","minimized":"False","advance_mode":"WhenCompleted","type":"action"},"23262":{"content":"Jackpot!","owner":"standing","speaking":"True","name":"Dialogue State","next":"23264","tru":"True","idx":"23262","posX":"26.08675","posY":"9.852058","minimized":"False","advance_mode":"OnClick","type":"dialogue"},"23264":{"actionTarget":"standing","actionName":"Flip","action_horizontal":"True","action_vertical":"False","name":null,"next":"23265","tru":"True","idx":"23264","posX":"24.99845","posY":"9.187926","minimized":"False","advance_mode":"WhenCompleted","type":"action"},"23265":{"actionTarget":"standing","actionName":"MoveTo","action_x-position":"-530","action_y-position":"-100.04","action_time":"2","action_easing":"ease_in_cubic","name":null,"next":"23267","tru":"True","idx":"23265","posX":"26.58223","posY":"6.2601","minimized":"False","advance_mode":"WhenCompleted","type":"action"},"23266":{"nextScript":"end","transitionText":"Interesting choice. And with that, you're done!","variablePairs":"","name":"End Sticker","next":"-1","tru":"True","idx":"23266","posX":"32.93777","posY":"6.797625","minimized":"False","advance_mode":"OnClick","type":"end"},"23267":{"action":"stop_background","clipName":"","volume":"1","name":null,"next":"23266","tru":"True","idx":"23267","posX":"29.57108","posY":"6.170941","minimized":"False","advance_mode":"OnClick","type":"sound"},"23272":{"actionTarget":"sitting","actionName":"Visibility","action_hidden":"True","name":null,"next":"23273","tru":"True","idx":"23272","posX":"19.60885","posY":"4.135508","minimized":"False","advance_mode":"Instantly","type":"action"},"23273":{"actionTarget":"standing","actionName":"Visibility","action_hidden":"False","name":null,"next":"23274","tru":"True","idx":"23273","posX":"19.56186","posY":"6.299158","minimized":"False","advance_mode":"Instantly","type":"action"},"23274":{"content":"Hey! You dropped something!","owner":"standing","speaking":"True","name":"Dialogue State","next":"23275","tru":"True","idx":"23274","posX":"22.52385","posY":"4.956475","minimized":"False","advance_mode":"OnClick","type":"dialogue"},"23275":{"actionTarget":"standing","actionName":"MoveTo","action_x-position":"203.95","action_y-position":"-100.04","action_time":"2","action_easing":"ease_in_out_quad","name":null,"next":"23276","tru":"True","idx":"23275","posX":"21.12708","posY":"5.059175","minimized":"False","advance_mode":"WhenCompleted","type":"action"},"23276":{"actionTarget":"money_bag_1","actionName":"Visibility","action_hidden":"True","name":null,"next":"23277","tru":"True","idx":"23276","posX":"21.52332","posY":"6.15278","minimized":"False","advance_mode":"Instantly","type":"action"},"23277":{"actionTarget":"standing","actionName":"MoveTo","action_x-position":"530","action_y-position":"-100.04","action_time":"2","action_easing":"ease_in_out_quad","name":null,"next":"23267","tru":"True","idx":"23277","posX":"25.42637","posY":"-0.3664332","minimized":"False","advance_mode":"WhenCompleted","type":"action"}},"scene":{"name":"Scene 1","title":"park","pos":{"x":0,"y":0,"z":0},"uid":"5","background":"park_3","furniture":[{"uid":0,"rotation":0,"visible":true,"locked":true,"color":"FFFFFF","textcolor":"000000","image":"park_3","value":0,"text":"","fontSize":0,"parentName":"","objectType":0,"name":"Background","pos":{"x":0,"y":0,"z":0},"size":{"x":960,"y":540}},{"uid":1,"rotation":0,"visible":true,"locked":false,"color":"FFFFFF","textcolor":"000000","image":"money_bag_1","value":0,"text":"","fontSize":0,"parentName":"","objectType":0,"name":"money_bag_1","pos":{"x":203.948929,"y":-189.7765,"z":0},"size":{"x":46.19759,"y":67.0297}},{"uid":2,"rotation":0,"visible":true,"locked":false,"color":"FFFFFF","textcolor":"000000","image":"male_sitting_17","value":0,"text":"","fontSize":0,"parentName":"","objectType":0,"name":"sitting","pos":{"x":-314.712524,"y":-104.815727,"z":0},"size":{"x":127,"y":275}},{"uid":3,"rotation":0,"visible":true,"locked":false,"color":"FFFFFF","textcolor":"000000","image":"male_18","value":0,"text":"","fontSize":0,"parentName":"","objectType":0,"name":"standing","pos":{"x":-289.238342,"y":-100.039314,"z":0},"size":{"x":74,"y":282}},{"uid":4,"rotation":0,"visible":true,"locked":false,"color":"FFFFFF","textcolor":"000000","image":"male_business_3","value":0,"text":"","fontSize":0,"parentName":"","objectType":0,"name":"walking","pos":{"x":-545.5725,"y":-115.429985,"z":0},"size":{"x":67,"y":269}}],"layoutScale":0.5,"layoutPosition":{"x":-0.530712545,"y":0},"scriptorScale":0.297631472,"scriptorPosition":{"x":192.1471,"y":-126.440186},"layoutParamSet":true,"scriptorParamSet":true},"started":false}
scene7 = {"dictNodes":{"0":{"actionTarget":null,"actionName":"","name":"Start","next":"23282","tru":"True","idx":"0","posX":"-0.7196652","posY":"0.6089469","minimized":"False","advance_mode":"Instantly","type":"start"},"23282":{"action":"play_sound","clipName":"Cheering and clapping","volume":"1","name":null,"next":"23283","tru":"True","idx":"23282","posX":"3.372957","posY":"1.063752","minimized":"False","advance_mode":"WhenCompleted","type":"sound"},"23283":{"content":"This is the end of the study. Thanks for your participation!","owner":null,"speaking":"True","name":"Dialogue State","next":"23284","tru":"True","idx":"23283","posX":"7.321887","posY":"2.072514","minimized":"False","advance_mode":"OnClick","type":"dialogue"},"23284":{"nextScript":"","transitionText":"None","variablePairs":"","name":"End Sticker","next":"-1","tru":"True","idx":"23284","posX":"10.84024","posY":"3.025915","minimized":"False","advance_mode":"OnClick","type":"end"}},"scene":{"name":"Scene 1","title":"end","pos":{"x":0,"y":0,"z":0},"uid":"6","background":"creditsBackground","furniture":[{"uid":0,"rotation":0,"visible":true,"locked":true,"color":"FFFFFF","textcolor":"000000","image":"creditsBackground","value":0,"text":"","fontSize":0,"parentName":"","objectType":0,"name":"Background","pos":{"x":0,"y":0,"z":0},"size":{"x":960,"y":540}}],"layoutScale":0.5,"layoutPosition":{"x":0,"y":0},"scriptorScale":0.4793388,"scriptorPosition":{"x":-50.85745,"y":19.0567074},"layoutParamSet":true,"scriptorParamSet":true},"started":false}
allScenes = [scene1, scene2, scene3, scene4, scene5, scene6]