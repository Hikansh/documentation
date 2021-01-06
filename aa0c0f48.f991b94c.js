(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{79:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return d}));var r=a(3),n=a(7),i=(a(0),a(89)),l={id:"selling",title:"Selling with Project CX",sidebar_label:"Selling"},o={unversionedId:"features/selling",id:"features/selling",isDocsHomePage:!1,title:"Selling with Project CX",description:"Selling things with Project-CX is done by",source:"@site/docs/features/selling.md",slug:"/features/selling",permalink:"/docs/features/selling",version:"current",sidebar_label:"Selling",sidebar:"someSidebar",previous:{title:"MailChimp Integration",permalink:"/docs/features/mailchimp"},next:{title:"Stripe",permalink:"/docs/features/stripe"}},s=[{value:"Step 1. Setup items to sell",id:"step-1-setup-items-to-sell",children:[{value:"a. Create one or more Sale Categories",id:"a-create-one-or-more-sale-categories",children:[]},{value:"b. Create Sale Options",id:"b-create-sale-options",children:[]},{value:"c. Create Sale Items",id:"c-create-sale-items",children:[]},{value:"d. Create Sale Units (Prices)",id:"d-create-sale-units-prices",children:[]},{value:"e. Create Discounts",id:"e-create-discounts",children:[]}]},{value:"Step 2. Setup Form to Sell Items",id:"step-2-setup-form-to-sell-items",children:[]},{value:"a. Display of items",id:"a-display-of-items",children:[]},{value:"b. Collection of Details",id:"b-collection-of-details",children:[]},{value:"c. Display of the Cart",id:"c-display-of-the-cart",children:[]},{value:"d Discount Code Entry",id:"d-discount-code-entry",children:[]},{value:"e. Credit Card Details",id:"e-credit-card-details",children:[]},{value:"Glossary",id:"glossary",children:[]}],c={rightToc:s};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Selling things with Project-CX is done by "),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Setting up the items to sell, and then")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Setting up forms to sell the items with."))),Object(i.b)("h2",{id:"step-1-setup-items-to-sell"},"Step 1. Setup items to sell"),Object(i.b)("p",null,"Setting up items is done in the 'Online Store' section of Project-CX Admin"),Object(i.b)("h3",{id:"a-create-one-or-more-sale-categories"},"a. Create one or more Sale Categories"),Object(i.b)("p",null,"Categories are used to group items that you would like to be listed together. "),Object(i.b)("h3",{id:"b-create-sale-options"},"b. Create Sale Options"),Object(i.b)("p",null,"Options can be used for any items. They are used for sizes or types of participants (Adult, Child etc). Anything you want to charge a different amount for the same item should have a different option."),Object(i.b)("h3",{id:"c-create-sale-items"},"c. Create Sale Items"),Object(i.b)("p",null,"Create items to sell and link them to categories."),Object(i.b)("h3",{id:"d-create-sale-units-prices"},"d. Create Sale Units (Prices)"),Object(i.b)("p",null,"Create Sale Units by linking a sale item with a sale option and giving it a price."),Object(i.b)("h3",{id:"e-create-discounts"},"e. Create Discounts"),Object(i.b)("p",null,"There are two types of discounts, volume or code. Each are either percentage or fixed price based. "),Object(i.b)("p",null,"Volume discounts are setup on sale categories, and are calculated on the number of units purchased."),Object(i.b)("p",null,"Code discounts are entered in the discount list."),Object(i.b)("h2",{id:"step-2-setup-form-to-sell-items"},"Step 2. Setup Form to Sell Items"),Object(i.b)("p",null,"Sales Forms need to have three or four sections and a button to submit the form. "),Object(i.b)("p",null,"a. Display things to sell and allow users to purchase them"),Object(i.b)("p",null,"b. Collection of details for each Sale Unit (optional)"),Object(i.b)("p",null,"c. Display of the Cart"),Object(i.b)("p",null,"d. Credit Card Entry"),Object(i.b)("h2",{id:"a-display-of-items"},"a. Display of items"),Object(i.b)("p",null,"Displaying items is done with a [","[Form_Item_Types#Sale Category - Grid|Sale Category - Grid]","] form item. Admins specify the Sale Category to display, and the Project-CX form to display the items in the sale category in."),Object(i.b)("p",null,"The form displayed, or another form coming off of this form, need to have a [","[Form_Item_Types#Sales Options - Purchase|Sales Options - Purchase]","] form item on it to allow users to purchase items."),Object(i.b)("p",null,"Certain Bracket Notation fields can be added to form items in this displayed form. [","[Bracket_Notation#Sale Custom Fields|Bracket fields for Sales]","]"),Object(i.b)("h2",{id:"b-collection-of-details"},"b. Collection of Details"),Object(i.b)("p",null,"If required, users can collect information about each Sales Unit that is in the cart. This is done with a [","[Form_Item_Types#Sale Option - Details|Sales Option - Details]","] form item. You will specify the page to collect information about each Sales Unit."),Object(i.b)("p",null,"Certain Bracket Notation fields can be added to form items in this displayed form. [","[Bracket_Notation#Sale Custom Fields|Bracket fields for Sales]","]"),Object(i.b)("h2",{id:"c-display-of-the-cart"},"c. Display of the Cart"),Object(i.b)("p",null,"Displaying the cart is done with a [","[Form_Item_Types#Cart Display|Cart Display]","] form item. You can enter HTML text to be used to display each sale unit in the cart."),Object(i.b)("p",null,"Certain Bracket Notation fields can be added to this HTML. [","[Bracket_Notation#Sale Custom Fields|Bracket fields for Sales]","]"),Object(i.b)("h2",{id:"d-discount-code-entry"},"d Discount Code Entry"),Object(i.b)("p",null,"Adding a [","[Form_Item_Types#Discount Code Entry|Discount Code Entry]","] allows users to enter a code to obtain a discount. Volume discounts will be calculated automatically and only the largest discount will be used."),Object(i.b)("h2",{id:"e-credit-card-details"},"e. Credit Card Details"),Object(i.b)("p",null,"Credit card details are added to the form with a [","[Form_Item_Types#Credit Card|Credit Card]","] form item."),Object(i.b)("h2",{id:"glossary"},"Glossary"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Customer"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Person using the Project-CX application to purchase something"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Admin"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Person Setting up Project-CX")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Cart"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Sale Units that the customer is ready to buy")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Sale Category"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Collection of Items to sell")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Sale Item"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"An item to sell (eg. Coaching Clinic), the item will have options and belong to one or more categories")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Sale Option"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"General options that can be applied to many sale items (eg, Adult, Red Colour etc)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Sale Unit"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The actual thing that end users purchase. Sale Units have an associated Sale Item, and Sale Option, and a price.")))))}d.isMDXComponent=!0},89:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),d=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=d(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=d(a),p=r,m=b["".concat(l,".").concat(p)]||b[p]||u[p]||i;return a?n.a.createElement(m,o(o({ref:t},c),{},{components:a})):n.a.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);