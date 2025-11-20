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


-->Protect User from entering sensitive routes without logged in ,redirect it to sign in page.(this is also done using clerk middlewares)


-->Put signIn 's page.jsx inside (auth) --> sign-in  -->[[...signin]]
Study what are catch-all-route??

-->Avatar sz=ize is not changing


-->Connect to Supabase using connection string and all ,We will use prisma 

-->Setup ArcJet-Bot detection ,Rate Limiting ,Email validation ,Attack Protection ,Data Redaction.

-->Setup Ingest- 
               Recalculating recurring transactions, 
               generating monthly AI-powered financial reports, 
               sending budget alerts to users.

-->Now design your landing page-i.e page.tsx