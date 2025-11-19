-->Initialize project using 
npx create-next-app@latest

Install shadcn ui library and it's components


-->clear page.js,this is the main page that is shown on the server ,
It is winded in layout as children .All this is stored inside App folder.

npx shadcn@latest init

npx shadcn@latest add badge calendar card checkbox drawer dropdown-menu input popover progress select switch table tooltip

-->Add font 

const inter=Inter({subsets:["latin"]}); add this inside layout.js ,and delete the rest fonts.

container class makes all screen,