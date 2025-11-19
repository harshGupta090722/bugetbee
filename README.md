-->Initialize project using 
npx create-next-app@latest

Install shadcn ui library and it's components


-->clear page.js,this is the main page that is shown on the server ,
It is winded in layout as children .All this is stored inside App folder.

npx shadcn@latest init

npx shadcn@latest add badge calendar card checkbox drawer dropdown-menu input popover progress select switch table tooltip

-->Add font 

const inter=Inter({subsets:["latin"]}); add this inside layout.js ,and delete the rest fonts.


i)container gives your content a max-width that changes at different breakpoints.

It:
Centers your content
Adds horizontal padding
Expands on small screens
Gets fixed widths on larger screens
So it helps layout become responsive


-->Create Strcuture of the app in layout.js

Use Clerk for authentication -Signup /SignIn 

