(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{100:function(t,e,n){"use strict";var a=n(0),i=n.n(a),o=n(98),m=n(95),r=n(52),s=n.n(r),u=37,l=39;e.a=function(t){var e=t.lazy,n=t.block,r=t.children,c=t.defaultValue,h=t.values,d=t.groupId,p=t.className,b=Object(o.a)(),f=b.tabGroupChoices,g=b.setTabGroupChoices,y=Object(a.useState)(c),v=y[0],k=y[1];if(null!=d){var w=f[d];null!=w&&w!==v&&h.some((function(t){return t.value===w}))&&k(w)}var O=function(t){k(t),null!=d&&g(d,t)},S=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(m.a)("tabs",{"tabs--block":n},p)},h.map((function(t){var e=t.value,n=t.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===e,className:Object(m.a)("tabs__item",s.a.tabItem,{"tabs__item--active":v===e}),key:e,ref:function(t){return S.push(t)},onKeyDown:function(t){!function(t,e,n){switch(n.keyCode){case l:!function(t,e){var n=t.indexOf(e)+1;t[n]?t[n].focus():t[0].focus()}(t,e);break;case u:!function(t,e){var n=t.indexOf(e)-1;t[n]?t[n].focus():t[t.length-1].focus()}(t,e)}}(S,t.target,t)},onFocus:function(){return O(e)},onClick:function(){O(e)}},n)}))),e?Object(a.cloneElement)(r.filter((function(t){return t.props.value===v}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},r.map((function(t,e){return Object(a.cloneElement)(t,{key:e,hidden:t.props.value!==v})}))))}},101:function(t,e,n){"use strict";var a=n(3),i=n(0),o=n.n(i);e.a=function(t){var e=t.children,n=t.hidden,i=t.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:i}),e)}},75:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return s})),n.d(e,"metadata",(function(){return u})),n.d(e,"rightToc",(function(){return l})),n.d(e,"default",(function(){return h}));var a=n(3),i=n(7),o=(n(0),n(94)),m=n(100),r=n(101),s={id:"customItems_yml",title:"customItems.yml"},u={unversionedId:"customItems_yml",id:"customItems_yml",isDocsHomePage:!1,title:"customItems.yml",description:"Configuration",source:"@site/../docs/customItems_yml.mdx",slug:"/customItems_yml",permalink:"/MythicDrops/docs/customItems_yml",version:"current",sidebar:"docs",previous:{title:"creatureSpawning.yml",permalink:"/MythicDrops/docs/creatureSpawning_yml"},next:{title:"identifying.yml",permalink:"/MythicDrops/docs/identifying_yml"}},l=[{value:"Configuration",id:"configuration",children:[]}],c={rightToc:l};function h(t){var e=t.components,n=Object(i.a)(t,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"MythicDrops has a lot of configuration options. Below is the contents of the\ncustomItems.yml with inline explanations of what each configuration option does."),Object(o.b)(m.a,{defaultValue:"5.3.0",values:[{label:"5.4.0 (MD 6.4.x)",value:"5.4.0"},{label:"5.3.0 (MD 6.3.x)",value:"5.3.0"},{label:"5.2.0 (MD 6.2.x)",value:"5.2.0"},{label:"5.1.0 (MD 6.1.x)",value:"5.1.0"},{label:"5.0.0 (MD 6.0.x)",value:"5.0.0"}],mdxType:"Tabs"},Object(o.b)(r.a,{value:"5.4.0",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'version: 5.4.0\n## Name of a custom item. Used as an identifier by the plugin, so it needs\n## to be unique.\nsocketsword:\n  ## Material of the custom item. You can obtain a list of potential material\n  ## names (for 1.14 at time of writing) here:\n  ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html\n  material: WOODEN_SWORD\n  ## Name to display on the custom item itself.\n  display-name: "&2Socket Sword (Unique)"\n  ## Goes in the description of the custom item.\n  lore:\n    - "&7This sword has sockets!"\n    - "&2(Socket)"\n    - "&2(Socket)"\n    - "&2(Socket)"\n    - "&7Find a &2Socket Gem&7 to fill a &2(Socket)"\n  ## Weight of the custom item. See the weights section of the documentation\n  ## for more information.\n  weight: 100\n  ## Durability of the item when spawned. A durability of 1 means that the\n  ## item has taken 1 damage. If an item has a max durability of 127,\n  ## then setting this to 126 would almost break the item. This is due\n  ## to how both Minecraft and Spigot handle durability.\n  durability: 1\n  ## Chance for this custom item to drop when a monster that is carrying it\n  ## dies.\n  chance-to-drop-on-monster-death: 1.0\n  ## Should a message be sent to every player in the same world\n  ## when this custom item is dropped?\n  broadcast-on-find: true\n  ## Custom model data value. Only supported in 1.14+.\n  ## https://www.planetminecraft.com/forums/communities/texturing/new-1-14-custom-item-models-tuto-578834/\n  custom-model-data: 0\n  ## Should the custom item have the unbreakable NBT tag?\n  unbreakable: false\n  ## Should the custom item glow even if it doesn\'t have any enchantments?\n  glow: false\n  ## Enchantments to go on the custom item. Enchantment names here:\n  ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html\n  enchantments:\n    ## Standard enchantment name to level mapping.\n    DAMAGE_ALL: 5\n    LOOTING:\n      ## Minimum level of enchantment\n      minimum-level: 1\n      ## Maximum level of enchantment. Can be higher than normal maximum level\n      ## per Minecraft rules.\n      maximum-level: 2\n  ## Attributes to go on the items.\n  attributes:\n    ## This needs to be a unique value per custom item. It\'s used to help identify\n    ## the attribute to Minecraft.\n    iamarandomuniquekey1:\n      ## Attribute for this particular modifier. Attribute names here:\n      ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html\n      attribute: GENERIC_ARMOR\n      ## Decimal value for the amount this attribute adds.\n      amount: 2.0\n      ## Operation for this particular modifier. Operation names and descriptions here:\n      ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/AttributeModifier.Operation.html\n      operation: ADD_NUMBER\n    ## This attribute modifier uses a minimum amount and maximum amount to\n    ## create a randomized amount to apply for the modifier.\n    iamarandomuniquekey2:\n      attribute: GENERIC_ARMOR\n      ## Decimal value for the minimum amount this attribute adds.\n      minimum-amount: 4.0\n      ## Decimal value for the maximum amount this attribute adds.\n      maximum-amount: 6.0\n      operation: ADD_NUMBER\n      ## Which equipment slot should this modifier apply to? Not including\n      ## this field makes it apply to every equipment slot. Slot names here:\n      ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/EquipmentSlot.html\n      slot: OFF_HAND\n  ## Flags to control what is displayed on an item.\n  ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/ItemFlag.html\n  item-flags:\n    - HIDE_ATTRIBUTES\n  ## This is the level cost for an item if it is put inside an anvil.\n  repair-cost: 1000\n'))),Object(o.b)(r.a,{value:"5.3.0",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'version: 5.3.0\n## Name of a custom item. Used as an identifier by the plugin, so it needs\n## to be unique.\nsocketsword:\n  ## Material of the custom item. You can obtain a list of potential material\n  ## names (for 1.14 at time of writing) here:\n  ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html\n  material: WOODEN_SWORD\n  ## Name to display on the custom item itself.\n  display-name: "&2Socket Sword (Unique)"\n  ## Goes in the description of the custom item.\n  lore:\n    - "&7This sword has sockets!"\n    - "&2(Socket)"\n    - "&2(Socket)"\n    - "&2(Socket)"\n    - "&7Find a &2Socket Gem&7 to fill a &2(Socket)"\n  ## Weight of the custom item. See the weights section of the documentation\n  ## for more information.\n  weight: 100\n  ## Durability of the item when spawned. A durability of 1 means that the\n  ## item has taken 1 damage. If an item has a max durability of 127,\n  ## then setting this to 126 would almost break the item. This is due\n  ## to how both Minecraft and Spigot handle durability.\n  durability: 1\n  ## Chance for this custom item to drop when a monster that is carrying it\n  ## dies.\n  chance-to-drop-on-monster-death: 1.0\n  ## Should a message be sent to every player in the same world\n  ## when this custom item is dropped?\n  broadcast-on-find: true\n  ## Custom model data value. Only supported in 1.14+.\n  ## https://www.planetminecraft.com/forums/communities/texturing/new-1-14-custom-item-models-tuto-578834/\n  custom-model-data: 0\n  ## Should the custom item have the unbreakable NBT tag?\n  unbreakable: false\n  ## Should the custom item glow even if it doesn\'t have any enchantments?\n  glow: false\n  ## Enchantments to go on the custom item. Enchantment names here:\n  ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html\n  enchantments:\n    ## Standard enchantment name to level mapping.\n    DAMAGE_ALL: 5\n    LOOTING:\n      ## Minimum level of enchantment\n      minimum-level: 1\n      ## Maximum level of enchantment. Can be higher than normal maximum level\n      ## per Minecraft rules.\n      maximum-level: 2\n  ## Attributes to go on the items.\n  attributes:\n    ## This needs to be a unique value per custom item. It\'s used to help identify\n    ## the attribute to Minecraft.\n    iamarandomuniquekey1:\n      ## Attribute for this particular modifier. Attribute names here:\n      ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html\n      attribute: GENERIC_ARMOR\n      ## Decimal value for the amount this attribute adds.\n      amount: 2.0\n      ## Operation for this particular modifier. Operation names and descriptions here:\n      ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/AttributeModifier.Operation.html\n      operation: ADD_NUMBER\n    ## This attribute modifier uses a minimum amount and maximum amount to\n    ## create a randomized amount to apply for the modifier.\n    iamarandomuniquekey2:\n      attribute: GENERIC_ARMOR\n      ## Decimal value for the minimum amount this attribute adds.\n      minimum-amount: 4.0\n      ## Decimal value for the maximum amount this attribute adds.\n      maximum-amount: 6.0\n      operation: ADD_NUMBER\n      ## Which equipment slot should this modifier apply to? Not including\n      ## this field makes it apply to every equipment slot. Slot names here:\n      ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/EquipmentSlot.html\n      slot: OFF_HAND\n  ## Flags to control what is displayed on an item.\n  ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/ItemFlag.html\n  item-flags:\n    - HIDE_ATTRIBUTES\n'))),Object(o.b)(r.a,{value:"5.2.0",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'version: 5.2.0\n## Name of a custom item. Used as an identifier by the plugin, so it needs\n## to be unique.\nsocketsword:\n  ## Material of the custom item. You can obtain a list of potential material\n  ## names (for 1.14 at time of writing) here:\n  ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html\n  material: WOODEN_SWORD\n  ## Name to display on the custom item itself.\n  display-name: "&2Socket Sword (Unique)"\n  ## Goes in the description of the custom item.\n  lore:\n    - "&7This sword has sockets!"\n    - "&2(Socket)"\n    - "&2(Socket)"\n    - "&2(Socket)"\n    - "&7Find a &2Socket Gem&7 to fill a &2(Socket)"\n  ## Weight of the custom item. See the weights section of the documentation\n  ## for more information.\n  weight: 100\n  ## Durability of the item when spawned. A durability of 1 means that the\n  ## item has taken 1 damage. If an item has a max durability of 127,\n  ## then setting this to 126 would almost break the item. This is due\n  ## to how both Minecraft and Spigot handle durability.\n  durability: 1\n  ## Chance for this custom item to drop when a monster that is carrying it\n  ## dies.\n  chance-to-drop-on-monster-death: 1.0\n  ## Should a message be sent to every player in the same world\n  ## when this custom item is dropped?\n  broadcast-on-find: true\n  ## Custom model data value. Only supported in 1.14+.\n  ## https://www.planetminecraft.com/forums/communities/texturing/new-1-14-custom-item-models-tuto-578834/\n  custom-model-data: 0\n  ## Should the custom item have the unbreakable NBT tag?\n  unbreakable: false\n  ## Should the custom item glow even if it doesn\'t have any enchantments?\n  glow: false\n  ## Enchantments to go on the custom item. Enchantment names here:\n  ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html\n  enchantments:\n    ## Standard enchantment name to level mapping.\n    DAMAGE_ALL: 5\n    LOOTING:\n      ## Minimum level of enchantment\n      minimum-level: 1\n      ## Maximum level of enchantment. Can be higher than normal maximum level\n      ## per Minecraft rules.\n      maximum-level: 2\n  ## Attributes to go on the items.\n  attributes:\n    ## This needs to be a unique value per custom item. It\'s used to help identify\n    ## the attribute to Minecraft.\n    iamarandomuniquekey1:\n      ## Attribute for this particular modifier. Attribute names here:\n      ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html\n      attribute: GENERIC_ARMOR\n      ## Decimal value for the amount this attribute adds.\n      amount: 2.0\n      ## Operation for this particular modifier. Operation names and descriptions here:\n      ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/AttributeModifier.Operation.html\n      operation: ADD_NUMBER\n    ## This attribute modifier uses a minimum amount and maximum amount to\n    ## create a randomized amount to apply for the modifier.\n    iamarandomuniquekey2:\n      attribute: GENERIC_ARMOR\n      ## Decimal value for the minimum amount this attribute adds.\n      minimum-amount: 4.0\n      ## Decimal value for the maximum amount this attribute adds.\n      maximum-amount: 6.0\n      operation: ADD_NUMBER\n      ## Which equipment slot should this modifier apply to? Not including\n      ## this field makes it apply to every equipment slot. Slot names here:\n      ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/EquipmentSlot.html\n      slot: OFF_HAND\n'))),Object(o.b)(r.a,{value:"5.1.0",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'version: 5.1.0\n## Name of a custom item. Used as an identifier by the plugin, so it needs\n## to be unique.\nsocketsword:\n  ## Material of the custom item. You can obtain a list of potential material\n  ## names (for 1.14 at time of writing) here:\n  ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html\n  material: WOODEN_SWORD\n  ## Name to display on the custom item itself.\n  display-name: "&2Socket Sword (Unique)"\n  ## Goes in the description of the custom item.\n  lore:\n    - "&7This sword has sockets!"\n    - "&2(Socket)"\n    - "&2(Socket)"\n    - "&2(Socket)"\n    - "&7Find a &2Socket Gem&7 to fill a &2(Socket)"\n  ## Weight of the custom item. See the weights section of the documentation\n  ## for more information.\n  weight: 100\n  ## Durability of the item when spawned. A durability of 1 means that the\n  ## item has taken 1 damage. If an item has a max durability of 127,\n  ## then setting this to 126 would almost break the item. This is due\n  ## to how both Minecraft and Spigot handle durability.\n  durability: 1\n  ## Chance for this custom item to drop when a monster that is carrying it\n  ## dies.\n  chance-to-drop-on-monster-death: 1.0\n  ## Should a message be sent to every player in the same world\n  ## when this custom item is dropped?\n  broadcast-on-find: true\n  ## Custom model data value. Only supported in 1.14+.\n  ## https://www.planetminecraft.com/forums/communities/texturing/new-1-14-custom-item-models-tuto-578834/\n  custom-model-data: 0\n  ## Should the custom item have the unbreakable NBT tag?\n  unbreakable: false\n  ## Enchantments to go on the custom item. Enchantment names here:\n  ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html\n  enchantments:\n    ## Standard enchantment name to level mapping.\n    DAMAGE_ALL: 5\n    LOOTING:\n      ## Minimum level of enchantment\n      minimum-level: 1\n      ## Maximum level of enchantment. Can be higher than normal maximum level\n      ## per Minecraft rules.\n      maximum-level: 2\n  ## Attributes to go on the items.\n  attributes:\n    ## This needs to be a unique value per custom item. It\'s used to help identify\n    ## the attribute to Minecraft.\n    iamarandomuniquekey1:\n      ## Attribute for this particular modifier. Attribute names here:\n      ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html\n      attribute: GENERIC_ARMOR\n      ## Decimal value for the amount this attribute adds.\n      amount: 2.0\n      ## Operation for this particular modifier. Operation names and descriptions here:\n      ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/AttributeModifier.Operation.html\n      operation: ADD_NUMBER\n    ## This attribute modifier uses a minimum amount and maximum amount to\n    ## create a randomized amount to apply for the modifier.\n    iamarandomuniquekey2:\n      attribute: GENERIC_ARMOR\n      ## Decimal value for the minimum amount this attribute adds.\n      minimum-amount: 4.0\n      ## Decimal value for the maximum amount this attribute adds.\n      maximum-amount: 6.0\n      operation: ADD_NUMBER\n      ## Which equipment slot should this modifier apply to? Not including\n      ## this field makes it apply to every equipment slot. Slot names here:\n      ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/EquipmentSlot.html\n      slot: OFF_HAND\n'))),Object(o.b)(r.a,{value:"5.0.0",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'version: 5.0.0\n## Name of a custom item. Used as an identifier by the plugin, so it needs\n## to be unique.\nsocketsword:\n  ## Material of the custom item. You can obtain a list of potential material\n  ## names (for 1.14 at time of writing) here:\n  ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html\n  material: WOODEN_SWORD\n  ## Name to display on the custom item itself.\n  display-name: "&2Socket Sword (Unique)"\n  ## Goes in the description of the custom item.\n  lore:\n    - "&7This sword has sockets!"\n    - "&2(Socket)"\n    - "&2(Socket)"\n    - "&2(Socket)"\n    - "&7Find a &2Socket Gem&7 to fill a &2(Socket)"\n  ## Weight of the custom item. See the weights section of the documentation\n  ## for more information.\n  weight: 100\n  ## Durability of the item when spawned. A durability of 1 means that the\n  ## item has taken 1 damage. If an item has a max durability of 127,\n  ## then setting this to 126 would almost break the item. This is due\n  ## to how both Minecraft and Spigot handle durability.\n  durability: 1\n  ## Chance for this custom item to drop when a monster that is carrying it\n  ## dies.\n  chance-to-drop-on-monster-death: 1.0\n  ## Should a message be sent to every player in the same world\n  ## when this custom item is dropped?\n  broadcast-on-find: true\n  ## Custom model data value. Only supported in 1.14+.\n  ## https://www.planetminecraft.com/forums/communities/texturing/new-1-14-custom-item-models-tuto-578834/\n  custom-model-data: 0\n  ## Should the custom item have the unbreakable NBT tag?\n  unbreakable: false\n  ## Enchantments to go on the custom item. Enchantment names here:\n  ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html\n  enchantments:\n    ## Standard enchantment name to level mapping.\n    DAMAGE_ALL: 5\n    LOOTING:\n      ## Minimum level of enchantment\n      minimum-level: 1\n      ## Maximum level of enchantment. Can be higher than normal maximum level\n      ## per Minecraft rules.\n      maximum-level: 2\n')))))}h.isMDXComponent=!0},94:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return p}));var a=n(0),i=n.n(a);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=i.a.createContext({}),l=function(t){var e=i.a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},c=function(t){var e=l(t.components);return i.a.createElement(u.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return i.a.createElement(i.a.Fragment,{},e)}},d=i.a.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,m=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),c=l(n),d=a,p=c["".concat(m,".").concat(d)]||c[d]||h[d]||o;return n?i.a.createElement(p,r(r({ref:e},u),{},{components:n})):i.a.createElement(p,r({ref:e},u))}));function p(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,m=new Array(o);m[0]=d;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=t,r.mdxType="string"==typeof t?t:a,m[1]=r;for(var u=2;u<o;u++)m[u]=n[u];return i.a.createElement.apply(null,m)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95:function(t,e,n){"use strict";function a(t){var e,n,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=a(t[e]))&&(i&&(i+=" "),i+=n);else for(e in t)t[e]&&(i&&(i+=" "),i+=e);return i}e.a=function(){for(var t,e,n=0,i="";n<arguments.length;)(t=arguments[n++])&&(e=a(t))&&(i&&(i+=" "),i+=e);return i}},98:function(t,e,n){"use strict";var a=n(0),i=n(99);e.a=function(){var t=Object(a.useContext)(i.a);if(null==t)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return t}},99:function(t,e,n){"use strict";var a=n(0),i=Object(a.createContext)(void 0);e.a=i}}]);