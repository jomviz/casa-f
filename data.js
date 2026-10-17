var APP_DATA = {
  "scenes": [
    {
      "id": "0-1-vereda",
      "name": "1 Vereda",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.423668909217076,
          "pitch": 0.07763167170191565,
          "rotation": 0,
          "target": "1-2-estar-comedor"
        },
        {
          "yaw": 0.6096595797882252,
          "pitch": 0.07821278740902926,
          "rotation": 0,
          "target": "4-5-dormitorio-principal"
        },
        {
          "yaw": 0.5039091880337345,
          "pitch": 0.11973642424182174,
          "rotation": 0,
          "target": "5-6-dormitorio-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-2-estar-comedor",
      "name": "2 Estar comedor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1565156903388747,
          "pitch": 0.3985392960095808,
          "rotation": 0,
          "target": "2-3-cocina"
        },
        {
          "yaw": -0.7697769620608135,
          "pitch": 0.25371827236028466,
          "rotation": 0,
          "target": "5-6-dormitorio-2"
        },
        {
          "yaw": -0.4171812028368507,
          "pitch": 0.22127498664215928,
          "rotation": 0,
          "target": "0-1-vereda"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-3-cocina",
      "name": "3 Cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2115809739132786,
          "pitch": 0.23029340459112646,
          "rotation": 0,
          "target": "1-2-estar-comedor"
        },
        {
          "yaw": 2.9496388910118574,
          "pitch": 0.5168403274082962,
          "rotation": 0,
          "target": "3-4-bao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-4-bao",
      "name": "4 Baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "4-5-dormitorio-principal",
      "name": "5 Dormitorio principal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5406346595671696,
          "pitch": 0.4449026046916078,
          "rotation": 0,
          "target": "5-6-dormitorio-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-6-dormitorio-2",
      "name": "6 Dormitorio 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7337816802131805,
          "pitch": 0.5122584184223342,
          "rotation": 0,
          "target": "4-5-dormitorio-principal"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
