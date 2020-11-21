(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{100:function(e,t,n){"use strict";var i=n(0),a=n.n(i),o=n(98),s=n(95),r=n(52),m=n.n(r),l=37,h=39;t.a=function(e){var t=e.lazy,n=e.block,r=e.children,u=e.defaultValue,c=e.values,b=e.groupId,d=e.className,f=Object(o.a)(),p=f.tabGroupChoices,g=f.setTabGroupChoices,y=Object(i.useState)(u),w=y[0],v=y[1];if(null!=b){var T=p[b];null!=T&&T!==w&&c.some((function(e){return e.value===T}))&&v(T)}var x=function(e){v(e),null!=b&&g(b,e)},I=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n},d)},c.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":w===t,className:Object(s.a)("tabs__item",m.a.tabItem,{"tabs__item--active":w===t}),key:t,ref:function(e){return I.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case h:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(I,e.target,e)},onFocus:function(){return x(t)},onClick:function(){x(t)}},n)}))),t?Object(i.cloneElement)(r.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},r.map((function(e,t){return Object(i.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},101:function(e,t,n){"use strict";var i=n(3),a=n(0),o=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",Object(i.a)({role:"tabpanel"},{hidden:n,className:a}),t)}},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return m})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return h})),n.d(t,"default",(function(){return c}));var i=n(3),a=n(7),o=(n(0),n(94)),s=n(100),r=n(101),m={id:"tier_yml",title:"tier.yml"},l={unversionedId:"tier_yml",id:"tier_yml",isDocsHomePage:!1,title:"tier.yml",description:"Configuration",source:"@site/../docs/tier_yml.mdx",slug:"/tier_yml",permalink:"/MythicDrops/docs/tier_yml",version:"current",sidebar:"docs",previous:{title:"socketing.yml",permalink:"/MythicDrops/docs/socketing_yml"},next:{title:"Aura Gems",permalink:"/MythicDrops/docs/aura_gems"}},h=[{value:"Configuration",id:"configuration",children:[]}],u={rightToc:h};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"MythicDrops has a lot of configuration options. Below is the contents of a\ntier YAML with inline explanations of what each configuration option does."),Object(o.b)("p",null,"Display color and identifier color combinations must be unique."),Object(o.b)(s.a,{defaultValue:"1.5.0",values:[{label:"1.6.0 (MD 6.4.x)",value:"1.6.0"},{label:"1.5.0 (MD 6.3.x)",value:"1.5.0"},{label:"1.1.0 (MD 6.1.x)",value:"1.1.0"},{label:"1.0.1 (MD 6.0.x)",value:"1.0.1"}],mdxType:"Tabs"},Object(o.b)(r.a,{value:"1.6.0",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml"}),'version: 1.6.0\n## Display name for the tier. Used for display on items in lore.\ndisplay-name: Legendary\n## Color of the tier when used in names. Prefixed to the name of the randomized item as well.\ndisplay-color: GOLD\n## Used in combination with the display color to identify the tier based on item name. Added to\n## the end of the item name.\nidentifier-color: DARK_RED\nattributes:\n  ## These attributes will go on every item from this tier.\n  base-attributes:\n    ## This needs to be a unique value per attribute/tier. It\'s used to help identify\n    ## the attribute to Minecraft.\n    legendaryuniquekey1:\n      ## Attribute for this particular modifier. Attribute names here:\n      ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html\n      attribute: GENERIC_ARMOR\n      ## Decimal value for the amount this attribute adds.\n      amount: 2.0\n      ## Operation for this particular modifier. Operation names and descriptions here:\n      ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/AttributeModifier.Operation.html\n      operation: ADD_NUMBER\n  bonus-attributes:\n    legendaryuniquekey2:\n      attribute: GENERIC_ARMOR\n      ## Decimal value for the minimum amount this attribute adds.\n      minimum-amount: 4.0\n      ## Decimal value for the maximum amount this attribute adds.\n      maximum-amount: 6.0\n      operation: ADD_NUMBER\n      ## Which equipment slot should this modifier apply to? Not including\n      ## this field makes it apply to every equipment slot. Slot names here:\n      ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/EquipmentSlot.html\n      slot: OFF_HAND\n  ## The minimum number of bonus attributes to go on items from this tier.\n  minimum-bonus-attributes: 0\n  ## The maximum number of bonus attributes to go on items from this tier.\n  maximum-bonus-attributes: 0\nenchantments:\n  ## If set to true, only base enchantments that could naturally appear on the item will be put on the item.\n  ## For instance, with this on, a sword could not get the Feather Falling enchantment.\n  safe-base-enchantments: true\n  ## If set to true, only bonus enchantments that could naturally appear on the item will be put on the item.\n  ## For instance, with this on, a sword could not get the Feather Falling enchantment.\n  safe-bonus-enchantments: false\n  ## If set to true, only relation enchantments that could naturally appear on the item will be put on the item.\n  ## For instance, with this on, a sword could not get the Feather Falling enchantment.\n  safe-relation-enchantments: false\n  ## If set to true, base enchantments are allowed to roll numbers higher than naturally obtainable.\n  allow-high-base-enchantments: true\n  ## If set to true, bonus enchantments are allowed to roll numbers higher than naturally obtainable.\n  allow-high-bonus-enchantments: true\n  ## If set to true, relation enchantments are allowed to roll numbers higher than naturally obtainable.\n  allow-high-relation-enchantments: true\n  ## This is a list of enchantments that will go on every item of this tier. They can be specified in\n  ## the below format:\n  ## < > - mandatory\n  ## [ ] - optional\n  ##\n  ## <ENCHANTMENT NAME>:<MINIMUM LEVEL>:[MAXIMUM LEVEL]\n  ##\n  ## See below for a couple of examples. Make sure to not end the value with the colon.\n  ## Enchantments: https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html\n  base-enchantments:\n    - ARROW_DAMAGE:1:1\n    - DURABILITY:10\n    - ARROW_INFINITE:1:1\n    - DAMAGE_ALL:1:5\n  ## This is a list of enchantments that can be rolled onto items in this tier. Note that it has a different\n  ## shape than the base-enchantments section. Both base-enchantments and bonus-enchantments can follow either\n  ## pattern. You can have a list (like in the above section) or you can have sub-sections (like below).\n  ##\n  ## In this section, like above, minimum-level is mandatory while maximum-level is optional.\n  bonus-enchantments:\n    PROTECTION_FIRE:\n      minimum-level: 1\n      maximum-level: 2\n    ARROW_FIRE:\n      minimum-level: 1\n      maximum-level: 1\n    DAMAGE_ARTHROPODS:\n      minimum-level: 1\n      maximum-level: 4\n  ## This is the minimum number of bonus-enchantments that can be rolled on an item\n  ## from this tier. In order to meet this number, multiple of the same bonus enchantment\n  ## can be rolled.\n  minimum-bonus-enchantments: 7\n  ## This is the maximum number of bonus-enchantments that can be rolled on an item\n  ## from this tier. In order to meet this number, multiple of the same bonus enchantment\n  ## can be rolled.\n  maximum-bonus-enchantments: 10\nlore:\n  ## This is the minimum number of bonus-lore that can be rolled on an item\n  ## from this tier. In order to meet this number, multiple of the same bonus lore\n  ## can be rolled.\n  minimum-bonus-lore: 0\n  ## This is the maximum number of bonus-lore that can be rolled on an item\n  ## from this tier. In order to meet this number, multiple of the same bonus lore\n  ## can be rolled.\n  maximum-bonus-lore: 0\n  ## This is a list of lore that will go on every item from this tier.\n  base-lore:\n    - "&6An item only the worthy can hold."\n  ## This is a list of lore that will be selected from when applying bonus lore. You can add\n  ## multiple lines in the bonus lore by adding a linebreak character in the value: \\n\n  bonus-lore:\n    - "&6Test Lore"\n    - "&6Please Ignore"\n## This is the maximum durability percentage that an item of this tier can spawn\n## at. 1.0 = 100%, 0.0 = 0%\nmaximum-durability: 0.8\n## This is the minimum durability percentage that an item of this tier can spawn\n## at. 1.0 = 100%, 0.0 = 0%\nminimum-durability: 0.75\n## This is the minimum number of sockets that can be rolled on an item of this tier.\nminimum-sockets: 0\n## This is the maximum number of sockets that can be rolled on an item of this tier.\nmaximum-sockets: 6\n## This is the weight of this tier. See the weight page for more details.\nweight: 0.01\n## This is the percentage chance for a mob to drop this item if they\'re holding it\n## when they die. 1.0 = 100%, 0.0 = 0%\n## Note that the above percentages only work for when a player has recently damaged the mob\n## before it dies (~1 second). If you want it to work for fall damage, bump it to 1.1.\nchance-to-drop-on-monster-death: 1.0\n## This is the weight of this tier when identifying an item. See the weight page for more details.\nidentity-weight: 0.01\n## This is the percentage chance for an item of this tier to have sockets. 1.0 = 100%, 0.0 = 0%\nchance-to-have-sockets: 0.6\n## Should a broadcast be sent to all players on the same world when an item of this tier is found?\nbroadcast-on-find: true\nitem-types:\n  ## Item groups containing materials that items from this tier can use.\n  allowed-groups:\n    - pickaxe\n    - sword\n    - shears\n    - axe\n    - hoe\n    - shovel\n    - bow\n    - fishing rod\n    - helmet\n    - boots\n    - chestplate\n    - leggings\n  ## Item groups containing materials that items from this tier cannot use. Any materials in both this list\n  ## and allowed-groups will not be used.\n  disallowed-groups:\n    - leather\n    - chainmail\n    - gold\n    - iron\n    - wood\n    - stone\n  ## Explicit material IDs that items from this tier can use. Combined with allowed-groups.\n  allowed-material-ids: []\n  ## Explicit material IDs that items from this tier cannot use. Combined with disallowed-groups.\n  disallowed-material-ids: []\n## Minimum distance from spawn that a mob must be in order to get this item. -1 disables.\nminimum-distance-from-spawn: -1\n## Maximum distance from spawn that a mob must be in order to get this item. -1 disables.\nmaximum-distance-from-spawn: -1\n## Should the item spawn with the unbreakable flag?\nunbreakable: false\n## Override the global display name format for this tier.\nitem-display-name-format: "%tiername% %mythicmaterial%"\n## Override the global lore display name format for this tier.\ntooltip-format:\n  - "&7Type: %mythicmaterial%"\n  - "&7Tier:%tiercolor% %tiername%"\n  - "&FA fairly useless item, wouldn\'t you say?"\n## Flags to control what is displayed on an item.\n## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/ItemFlag.html\nitem-flags:\n  - HIDE_ATTRIBUTES\n## This is the percentage chance for an item of this tier to have sockets. 1.0 = 100%, 0.0 = 0%\nchance-to-have-socket-extender-slots: 0.0\n## This is the minimum number of socket extender slots that can be rolled on an item of this tier.\nminimum-socket-extender-slots: 0\n## This is the maximum number of socket extender slots that can be rolled on an item of this tier.\nmaximum-socket-extender-slots: 0\n## This is the level cost for an item if it is put inside an anvil.\nrepair-cost: 1000\n'))),Object(o.b)(r.a,{value:"1.5.0",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml"}),'version: 1.5.0\n## Display name for the tier. Used for display on items in lore.\ndisplay-name: Legendary\n## Color of the tier when used in names. Prefixed to the name of the randomized item as well.\ndisplay-color: GOLD\n## Used in combination with the display color to identify the tier based on item name. Added to\n## the end of the item name.\nidentifier-color: DARK_RED\nattributes:\n  ## These attributes will go on every item from this tier.\n  base-attributes:\n    ## This needs to be a unique value per attribute/tier. It\'s used to help identify\n    ## the attribute to Minecraft.\n    legendaryuniquekey1:\n      ## Attribute for this particular modifier. Attribute names here:\n      ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html\n      attribute: GENERIC_ARMOR\n      ## Decimal value for the amount this attribute adds.\n      amount: 2.0\n      ## Operation for this particular modifier. Operation names and descriptions here:\n      ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/AttributeModifier.Operation.html\n      operation: ADD_NUMBER\n  bonus-attributes:\n    legendaryuniquekey2:\n      attribute: GENERIC_ARMOR\n      ## Decimal value for the minimum amount this attribute adds.\n      minimum-amount: 4.0\n      ## Decimal value for the maximum amount this attribute adds.\n      maximum-amount: 6.0\n      operation: ADD_NUMBER\n      ## Which equipment slot should this modifier apply to? Not including\n      ## this field makes it apply to every equipment slot. Slot names here:\n      ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/EquipmentSlot.html\n      slot: OFF_HAND\n  ## The minimum number of bonus attributes to go on items from this tier.\n  minimum-bonus-attributes: 0\n  ## The maximum number of bonus attributes to go on items from this tier.\n  maximum-bonus-attributes: 0\nenchantments:\n  ## If set to true, only base enchantments that could naturally appear on the item will be put on the item.\n  ## For instance, with this on, a sword could not get the Feather Falling enchantment.\n  safe-base-enchantments: true\n  ## If set to true, only bonus enchantments that could naturally appear on the item will be put on the item.\n  ## For instance, with this on, a sword could not get the Feather Falling enchantment.\n  safe-bonus-enchantments: false\n  ## If set to true, only relation enchantments that could naturally appear on the item will be put on the item.\n  ## For instance, with this on, a sword could not get the Feather Falling enchantment.\n  safe-relation-enchantments: false\n  ## If set to true, base enchantments are allowed to roll numbers higher than naturally obtainable.\n  allow-high-base-enchantments: true\n  ## If set to true, bonus enchantments are allowed to roll numbers higher than naturally obtainable.\n  allow-high-bonus-enchantments: true\n  ## If set to true, relation enchantments are allowed to roll numbers higher than naturally obtainable.\n  allow-high-relation-enchantments: true\n  ## This is a list of enchantments that will go on every item of this tier. They can be specified in\n  ## the below format:\n  ## < > - mandatory\n  ## [ ] - optional\n  ##\n  ## <ENCHANTMENT NAME>:<MINIMUM LEVEL>:[MAXIMUM LEVEL]\n  ##\n  ## See below for a couple of examples. Make sure to not end the value with the colon.\n  ## Enchantments: https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html\n  base-enchantments:\n    - ARROW_DAMAGE:1:1\n    - DURABILITY:10\n    - ARROW_INFINITE:1:1\n    - DAMAGE_ALL:1:5\n  ## This is a list of enchantments that can be rolled onto items in this tier. Note that it has a different\n  ## shape than the base-enchantments section. Both base-enchantments and bonus-enchantments can follow either\n  ## pattern. You can have a list (like in the above section) or you can have sub-sections (like below).\n  ##\n  ## In this section, like above, minimum-level is mandatory while maximum-level is optional.\n  bonus-enchantments:\n    PROTECTION_FIRE:\n      minimum-level: 1\n      maximum-level: 2\n    ARROW_FIRE:\n      minimum-level: 1\n      maximum-level: 1\n    DAMAGE_ARTHROPODS:\n      minimum-level: 1\n      maximum-level: 4\n  ## This is the minimum number of bonus-enchantments that can be rolled on an item\n  ## from this tier. In order to meet this number, multiple of the same bonus enchantment\n  ## can be rolled.\n  minimum-bonus-enchantments: 7\n  ## This is the maximum number of bonus-enchantments that can be rolled on an item\n  ## from this tier. In order to meet this number, multiple of the same bonus enchantment\n  ## can be rolled.\n  maximum-bonus-enchantments: 10\nlore:\n  ## This is the minimum number of bonus-lore that can be rolled on an item\n  ## from this tier. In order to meet this number, multiple of the same bonus lore\n  ## can be rolled.\n  minimum-bonus-lore: 0\n  ## This is the maximum number of bonus-lore that can be rolled on an item\n  ## from this tier. In order to meet this number, multiple of the same bonus lore\n  ## can be rolled.\n  maximum-bonus-lore: 0\n  ## This is a list of lore that will go on every item from this tier.\n  base-lore:\n    - "&6An item only the worthy can hold."\n  ## This is a list of lore that will be selected from when applying bonus lore. You can add\n  ## multiple lines in the bonus lore by adding a linebreak character in the value: \\n\n  bonus-lore:\n    - "&6Test Lore"\n    - "&6Please Ignore"\n## This is the maximum durability percentage that an item of this tier can spawn\n## at. 1.0 = 100%, 0.0 = 0%\nmaximum-durability: 0.8\n## This is the minimum durability percentage that an item of this tier can spawn\n## at. 1.0 = 100%, 0.0 = 0%\nminimum-durability: 0.75\n## This is the minimum number of sockets that can be rolled on an item of this tier.\nminimum-sockets: 0\n## This is the maximum number of sockets that can be rolled on an item of this tier.\nmaximum-sockets: 6\n## This is the weight of this tier. See the weight page for more details.\nweight: 0.01\n## This is the percentage chance for a mob to drop this item if they\'re holding it\n## when they die. 1.0 = 100%, 0.0 = 0%\n## Note that the above percentages only work for when a player has recently damaged the mob\n## before it dies (~1 second). If you want it to work for fall damage, bump it to 1.1.\nchance-to-drop-on-monster-death: 1.0\n## This is the weight of this tier when identifying an item. See the weight page for more details.\nidentity-weight: 0.01\n## This is the percentage chance for an item of this tier to have sockets. 1.0 = 100%, 0.0 = 0%\nchance-to-have-sockets: 0.6\n## Should a broadcast be sent to all players on the same world when an item of this tier is found?\nbroadcast-on-find: true\nitem-types:\n  ## Item groups containing materials that items from this tier can use.\n  allowed-groups:\n    - pickaxe\n    - sword\n    - shears\n    - axe\n    - hoe\n    - shovel\n    - bow\n    - fishing rod\n    - helmet\n    - boots\n    - chestplate\n    - leggings\n  ## Item groups containing materials that items from this tier cannot use. Any materials in both this list\n  ## and allowed-groups will not be used.\n  disallowed-groups:\n    - leather\n    - chainmail\n    - gold\n    - iron\n    - wood\n    - stone\n  ## Explicit material IDs that items from this tier can use. Combined with allowed-groups.\n  allowed-material-ids: []\n  ## Explicit material IDs that items from this tier cannot use. Combined with disallowed-groups.\n  disallowed-material-ids: []\n## Minimum distance from spawn that a mob must be in order to get this item. -1 disables.\nminimum-distance-from-spawn: -1\n## Maximum distance from spawn that a mob must be in order to get this item. -1 disables.\nmaximum-distance-from-spawn: -1\n## Should the item spawn with the unbreakable flag?\nunbreakable: false\n## Override the global display name format for this tier.\nitem-display-name-format: "%tiername% %mythicmaterial%"\n## Override the global lore display name format for this tier.\ntooltip-format:\n  - "&7Type: %mythicmaterial%"\n  - "&7Tier:%tiercolor% %tiername%"\n  - "&FA fairly useless item, wouldn\'t you say?"\n## Flags to control what is displayed on an item.\n## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/ItemFlag.html\nitem-flags:\n  - HIDE_ATTRIBUTES\n## This is the percentage chance for an item of this tier to have sockets. 1.0 = 100%, 0.0 = 0%\nchance-to-have-socket-extender-slots: 0.0\n## This is the minimum number of socket extender slots that can be rolled on an item of this tier.\nminimum-socket-extender-slots: 0\n## This is the maximum number of socket extender slots that can be rolled on an item of this tier.\nmaximum-socket-extender-slots: 0\n'))),Object(o.b)(r.a,{value:"1.1.0",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml"}),'version: 1.1.0\n## Display name for the tier. Used for display on items in lore.\ndisplay-name: Legendary\n## Color of the tier when used in names. Prefixed to the name of the randomized item as well.\ndisplay-color: GOLD\n## Used in combination with the display color to identify the tier based on item name. Added to\n## the end of the item name.\nidentifier-color: DARK_RED\nattributes:\n  ## These attributes will go on every item from this tier.\n  base-attributes:\n    ## This needs to be a unique value per attribute/tier. It\'s used to help identify\n    ## the attribute to Minecraft.\n    legendaryuniquekey1:\n      ## Attribute for this particular modifier. Attribute names here:\n      ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html\n      attribute: GENERIC_ARMOR\n      ## Decimal value for the amount this attribute adds.\n      amount: 2.0\n      ## Operation for this particular modifier. Operation names and descriptions here:\n      ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/AttributeModifier.Operation.html\n      operation: ADD_NUMBER\n  bonus-attributes:\n    legendaryuniquekey2:\n      attribute: GENERIC_ARMOR\n      ## Decimal value for the minimum amount this attribute adds.\n      minimum-amount: 4.0\n      ## Decimal value for the maximum amount this attribute adds.\n      maximum-amount: 6.0\n      operation: ADD_NUMBER\n      ## Which equipment slot should this modifier apply to? Not including\n      ## this field makes it apply to every equipment slot. Slot names here:\n      ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/EquipmentSlot.html\n      slot: OFF_HAND\n  ## The minimum number of bonus attributes to go on items from this tier.\n  minimum-bonus-attributes: 0\n  ## The maximum number of bonus attributes to go on items from this tier.\n  maximum-bonus-attributes: 0\nenchantments:\n  ## If set to true, only base enchantments that could naturally appear on the item will be put on the item.\n  ## For instance, with this on, a sword could not get the Feather Falling enchantment.\n  safe-base-enchantments: true\n  ## If set to true, only bonus enchantments that could naturally appear on the item will be put on the item.\n  ## For instance, with this on, a sword could not get the Feather Falling enchantment.\n  safe-bonus-enchantments: false\n  ## If set to true, base enchantments are allowed to roll numbers higher than naturally obtainable.\n  allow-high-base-enchantments: true\n  ## If set to true, bonus enchantments are allowed to roll numbers higher than naturally obtainable.\n  allow-high-bonus-enchantments: true\n  ## This is a list of enchantments that will go on every item of this tier. They can be specified in\n  ## the below format:\n  ## < > - mandatory\n  ## [ ] - optional\n  ##\n  ## <ENCHANTMENT NAME>:<MINIMUM LEVEL>:[MAXIMUM LEVEL]\n  ##\n  ## See below for a couple of examples. Make sure to not end the value with the colon.\n  base-enchantments:\n    - ARROW_DAMAGE:1:1\n    - DURABILITY:10\n    - ARROW_INFINITE:1:1\n    - DAMAGE_ALL:1:5\n  ## This is a list of enchantments that can be rolled onto items in this tier. Note that it has a different\n  ## shape than the base-enchantments section. Both base-enchantments and bonus-enchantments can follow either\n  ## pattern. You can have a list (like in the above section) or you can have sub-sections (like below).\n  ##\n  ## In this section, like above, minimum-level is mandatory while maximum-level is optional.\n  bonus-enchantments:\n    PROTECTION_FIRE:\n      minimum-level: 1\n      maximum-level: 2\n    ARROW_FIRE:\n      minimum-level: 1\n      maximum-level: 1\n    DAMAGE_ARTHROPODS:\n      minimum-level: 1\n      maximum-level: 4\n  ## This is the minimum number of bonus-enchantments that can be rolled on an item\n  ## from this tier. In order to meet this number, multiple of the same bonus enchantment\n  ## can be rolled.\n  minimum-bonus-enchantments: 7\n  ## This is the maximum number of bonus-enchantments that can be rolled on an item\n  ## from this tier. In order to meet this number, multiple of the same bonus enchantment\n  ## can be rolled.\n  maximum-bonus-enchantments: 10\nlore:\n  ## This is the minimum number of bonus-lore that can be rolled on an item\n  ## from this tier. In order to meet this number, multiple of the same bonus lore\n  ## can be rolled.\n  minimum-bonus-lore: 0\n  ## This is the maximum number of bonus-lore that can be rolled on an item\n  ## from this tier. In order to meet this number, multiple of the same bonus lore\n  ## can be rolled.\n  maximum-bonus-lore: 0\n  ## This is a list of lore that will go on every item from this tier.\n  base-lore:\n    - "&6An item only the worthy can hold."\n  ## This is a list of lore that will be selected from when applying bonus lore. You can add\n  ## multiple lines in the bonus lore by adding a linebreak character in the value: \\n\n  bonus-lore:\n    - "&6Test Lore"\n    - "&6Please Ignore"\n## This is the maximum durability percentage that an item of this tier can spawn\n## at. 1.0 = 100%, 0.0 = 0%\nmaximum-durability: 0.8\n## This is the minimum durability percentage that an item of this tier can spawn\n## at. 1.0 = 100%, 0.0 = 0%\nminimum-durability: 0.75\n## This is the minimum number of sockets that can be rolled on an item of this tier.\nminimum-sockets: 0\n## This is the maximum number of sockets that can be rolled on an item of this tier.\nmaximum-sockets: 6\n## This is the weight of this tier. See the weight page for more details.\nweight: 0.01\n## This is the percentage chance for a mob to drop this item if they\'re holding it\n## when they die. 1.0 = 100%, 0.0 = 0%\n## Note that the above percentages only work for when a player has recently damaged the mob\n## before it dies (~1 second). If you want it to work for fall damage, bump it to 1.1.\nchance-to-drop-on-monster-death: 1.0\n## This is the weight of this tier when identifying an item. See the weight page for more details.\nidentity-weight: 0.01\n## This is the percentage chance for an item of this tier to have sockets. 1.0 = 100%, 0.0 = 0%\nchance-to-have-sockets: 0.6\n## Should a broadcast be sent to all players on the same world when an item of this tier is found?\nbroadcast-on-find: true\nitem-types:\n  ## Item groups containing materials that items from this tier can use.\n  allowed-groups:\n    - pickaxe\n    - sword\n    - shears\n    - axe\n    - hoe\n    - shovel\n    - bow\n    - fishing rod\n    - helmet\n    - boots\n    - chestplate\n    - leggings\n  ## Item groups containing materials that items from this tier cannot use. Any materials in both this list\n  ## and allowed-groups will not be used.\n  disallowed-groups:\n    - leather\n    - chainmail\n    - gold\n    - iron\n    - wood\n    - stone\n  ## Explicit material IDs that items from this tier can use. Combined with allowed-groups.\n  allowed-material-ids: []\n  ## Explicit material IDs that items from this tier cannot use. Combined with disallowed-groups.\n  disallowed-material-ids: []\n## Minimum distance from spawn that a mob must be in order to get this item. -1 disables.\nminimum-distance-from-spawn: -1\n## Maximum distance from spawn that a mob must be in order to get this item. -1 disables.\nmaximum-distance-from-spawn: -1\n## Should the item spawn with the unbreakable flag?\nunbreakable: false\n'))),Object(o.b)(r.a,{value:"1.0.1",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml"}),'version: 1.0.1\n## Display name for the tier. Used for display on items in lore.\ndisplay-name: Legendary\n## Color of the tier when used in names. Prefixed to the name of the randomized item as well.\ndisplay-color: GOLD\n## Used in combination with the display color to identify the tier based on item name. Added to\n## the end of the item name.\nidentifier-color: DARK_RED\nenchantments:\n  ## If set to true, only base enchantments that could naturally appear on the item will be put on the item.\n  ## For instance, with this on, a sword could not get the Feather Falling enchantment.\n  safe-base-enchantments: true\n  ## If set to true, only bonus enchantments that could naturally appear on the item will be put on the item.\n  ## For instance, with this on, a sword could not get the Feather Falling enchantment.\n  safe-bonus-enchantments: false\n  ## If set to true, base enchantments are allowed to roll numbers higher than naturally obtainable.\n  allow-high-base-enchantments: true\n  ## If set to true, bonus enchantments are allowed to roll numbers higher than naturally obtainable.\n  allow-high-bonus-enchantments: true\n  ## This is a list of enchantments that will go on every item of this tier. They can be specified in\n  ## the below format:\n  ## < > - mandatory\n  ## [ ] - optional\n  ##\n  ## <ENCHANTMENT NAME>:<MINIMUM LEVEL>:[MAXIMUM LEVEL]\n  ##\n  ## See below for a couple of examples. Make sure to not end the value with the colon.\n  base-enchantments:\n    - ARROW_DAMAGE:1:1\n    - DURABILITY:10\n    - ARROW_INFINITE:1:1\n    - DAMAGE_ALL:1:5\n  ## This is a list of enchantments that can be rolled onto items in this tier. Note that it has a different\n  ## shape than the base-enchantments section. Both base-enchantments and bonus-enchantments can follow either\n  ## pattern. You can have a list (like in the above section) or you can have sub-sections (like below).\n  ##\n  ## In this section, like above, minimum-level is mandatory while maximum-level is optional.\n  bonus-enchantments:\n    PROTECTION_FIRE:\n      minimum-level: 1\n      maximum-level: 2\n    ARROW_FIRE:\n      minimum-level: 1\n      maximum-level: 1\n    DAMAGE_ARTHROPODS:\n      minimum-level: 1\n      maximum-level: 4\n  ## This is the minimum number of bonus-enchantments that can be rolled on an item\n  ## from this tier. In order to meet this number, multiple of the same bonus enchantment\n  ## can be rolled.\n  minimum-bonus-enchantments: 7\n  ## This is the maximum number of bonus-enchantments that can be rolled on an item\n  ## from this tier. In order to meet this number, multiple of the same bonus enchantment\n  ## can be rolled.\n  maximum-bonus-enchantments: 10\nlore:\n  ## This is the minimum number of bonus-lore that can be rolled on an item\n  ## from this tier. In order to meet this number, multiple of the same bonus lore\n  ## can be rolled.\n  minimum-bonus-lore: 0\n  ## This is the maximum number of bonus-lore that can be rolled on an item\n  ## from this tier. In order to meet this number, multiple of the same bonus lore\n  ## can be rolled.\n  maximum-bonus-lore: 0\n  ## This is a list of lore that will go on every item from this tier.\n  base-lore:\n    - "&6An item only the worthy can hold."\n  ## This is a list of lore that will be selected from when applying bonus lore. You can add\n  ## multiple lines in the bonus lore by adding a linebreak character in the value: \\n\n  bonus-lore:\n    - "&6Test Lore"\n    - "&6Please Ignore"\n## This is the maximum durability percentage that an item of this tier can spawn\n## at. 1.0 = 100%, 0.0 = 0%\nmaximum-durability: 0.8\n## This is the minimum durability percentage that an item of this tier can spawn\n## at. 1.0 = 100%, 0.0 = 0%\nminimum-durability: 0.75\n## This is the minimum number of sockets that can be rolled on an item of this tier.\nminimum-sockets: 0\n## This is the maximum number of sockets that can be rolled on an item of this tier.\nmaximum-sockets: 6\n## This is the weight of this tier. See the weight page for more details.\nweight: 0.01\n## This is the percentage chance for a mob to drop this item if they\'re holding it\n## when they die. 1.0 = 100%, 0.0 = 0%\nchance-to-drop-on-monster-death: 1.0\n## This is the weight of this tier when identifying an item. See the weight page for more details.\nidentity-weight: 0.01\n## This is the percentage chance for an item of this tier to have sockets. 1.0 = 100%, 0.0 = 0%\nchance-to-have-sockets: 0.6\n## Should a broadcast be sent to all players on the same world when an item of this tier is found?\nbroadcast-on-find: true\nitem-types:\n  ## Item groups containing materials that items from this tier can use.\n  allowed-groups:\n    - pickaxe\n    - sword\n    - shears\n    - axe\n    - hoe\n    - shovel\n    - bow\n    - fishing rod\n    - helmet\n    - boots\n    - chestplate\n    - leggings\n  ## Item groups containing materials that items from this tier cannot use. Any materials in both this list\n  ## and allowed-groups will not be used.\n  disallowed-groups:\n    - leather\n    - chainmail\n    - gold\n    - iron\n    - wood\n    - stone\n  ## Explicit material IDs that items from this tier can use. Combined with allowed-groups.\n  allowed-material-ids: []\n  ## Explicit material IDs that items from this tier cannot use. Combined with disallowed-groups.\n  disallowed-material-ids: []\n## Minimum distance from spawn that a mob must be in order to get this item. -1 disables.\nminimum-distance-from-spawn: -1\n## Maximum distance from spawn that a mob must be in order to get this item. -1 disables.\nmaximum-distance-from-spawn: -1\n## Should the item spawn with the unbreakable flag?\nunbreakable: false\n')))))}c.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),h=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=h(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),u=h(n),b=i,d=u["".concat(s,".").concat(b)]||u[b]||c[b]||o;return n?a.a.createElement(d,r(r({ref:t},l),{},{components:n})):a.a.createElement(d,r({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=b;var r={};for(var m in t)hasOwnProperty.call(t,m)&&(r[m]=t[m]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var l=2;l<o;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";function i(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(a&&(a+=" "),a+=t);return a}},98:function(e,t,n){"use strict";var i=n(0),a=n(99);t.a=function(){var e=Object(i.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},99:function(e,t,n){"use strict";var i=n(0),a=Object(i.createContext)(void 0);t.a=a}}]);