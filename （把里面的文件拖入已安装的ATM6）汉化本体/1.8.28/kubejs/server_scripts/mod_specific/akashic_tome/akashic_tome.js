onEvent('recipes', e => {
  e.remove({ id: 'akashictome:tome' })

  e.shapeless(
    Item.of('akashictome:tome', {
      'akashictome:is_morphing': 1,
      'akashictome:data': {
        industrialforegoing: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'patchouli:book': 'industrialforegoing:industrial_foregoing',
            'akashictome:displayName': {
              text: "工业先锋手册"
            }
          }
        },
        tconstruct: {
          id: 'tconstruct:materials_and_you',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: '匠魂宝典'
            }
          }
        },
        psi: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'patchouli:book': 'psi:encyclopaedia_psionica',
            'akashictome:displayName': {
              text: 'Psi百科全书'
            }
          }
        },
        resourcefulbees: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: '五十度蜂'
            },
            'patchouli:book': 'resourcefulbees:fifty_shades_of_bees',
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"五十度蜂"}]}'
            }
          }
        },
        astralsorcery: {
          id: 'astralsorcery:tome',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: '星芒宝典'
            }
          }
        },
        theoneprobe: {
          id: 'theoneprobe:probenote',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: '检测器设置'
            },
            'akashictome:is_morphing': 1
          }
        },
        ftbquests: {
          id: 'ftbquests:book',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: '任务书'
            }
          }
        },
        'mana-and-artifice': {
          id: 'mana-and-artifice:guide_book',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: '奥秘古籍'
            },
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"奥秘古籍"}]}'
            }
          }
        },
        immersiveengineering: {
          id: 'immersiveengineering:manual',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: "工程师手册"
            },
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"工程师\\\手册"}]}'
            }
          }
        },
        woot: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: '生物工厂指南'
            },
            'patchouli:book': 'woot:wootguide',
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"生物工厂指南"}]}'
            }
          }
        },
        eidolon: {
          id: 'eidolon:codex',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: '秘仪教典'
            },
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"秘仪教典"}]}'
            }
          }
        },
        allthemodium: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'ATM'
            },
            'patchouli:book': 'allthemodium:allthemodium',
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"ATM"}]}'
            }
          }
        },
        elementalcraft: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: '元素百科'
            },
            'patchouli:book': 'elementalcraft:element_book',
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"元素百科"}]}'
            }
          }
        },
        silentgear: {
          id: 'silentgear:guide_book',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: '寂静装备指南'
            }
          }
        },
        botania: {
          id: 'botania:lexicon',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: '植物魔法辞典'
            },
            'botania:elven_unlock': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"植物魔法辞典"}]}'
            },
            'akashictome:is_morphing': 1
          }
        },
        thermal: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'patchouli:book': 'thermal:guidebook',
            'akashictome:displayName': {
              text: '热力百科'
            }
          }
        },
        rftoolsbase: {
          id: 'rftoolsbase:manual',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'RF工具指导手册'
            },
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"RF工具指导手册"}]}'
            }
          }
        },
        integratedtunnels: {
          id: 'integrateddynamics:on_the_dynamics_of_integration',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: '论动态联合'
            }
          }
        },
        powah: {
          id: 'powah:book',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'Powah!手册'
            },
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Powah!手册"}]}'
            }
          }
        },
        pneumaticcraft: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'patchouli:book': 'pneumaticcraft:book',
            'akashictome:displayName': {
              text: '气动工艺：再加压说明书'
            }
          }
        },
        naturesaura: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'patchouli:book': 'naturesaura:book',
            'akashictome:displayName': {
              text: '自然灵气之书'
            }
          }
        },
        pedestals: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: '基座手册'
            },
            'patchouli:book': 'pedestals:manual',
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"基座手册"}]}'
            }
          }
        },
        engineersdecor: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'patchouli:book': 'engineersdecor:engineersdecor_manual',
            'akashictome:displayName': {
              text: "工程师的装饰"
            }
          }
        },
        mahoutsukai: {
          id: 'mahoutsukai:guidebook',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: '魔法使知识汇编'
            },
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"魔法使知识汇编"}]}'
            }
          }
        },
        solcarrot: {
          id: 'solcarrot:food_book',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: '食物清单'
            },
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"食物清单"}]}'
            }
          }
        },
        modularrouters: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'patchouli:book': 'modularrouters:book',
            'akashictome:displayName': {
              text: '模块化路由器手册'
            }
          }
        },
        ars_nouveau: {
          id: 'ars_nouveau:worn_notebook',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: '破旧的笔记本'
            }
          }
        },
        bloodmagic: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: '血染知书'
            },
            'patchouli:book': 'bloodmagic:guide',
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"血染知书"}]}'
            }
          }
        },
        twilightforest: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'patchouli:book': 'twilightforest:guide',
            'akashictome:displayName': {
              text: "旅行者日记"
            }
          }
        },
        mysticalagriculture: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: '神秘农业'
            },
            'patchouli:book': 'mysticalagriculture:guide',
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"神秘农业"}]}'
            }
          }
        },
        cyclic: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: '循环指南'
            },
            'patchouli:book': 'cyclic:cyclic_guide_book',
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"循环指南"}]}'
            }
          }
        },
        advancedperipherals: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: "高级外设"
            },
            'patchouli:book': 'advancedperipherals:manual'
          }
        }
      }
    }),
    'minecraft:stick'
  ).id(`kubejs:akashik_tome`)
})
