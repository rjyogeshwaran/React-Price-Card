import React from "react"
import Card from "./components/Card"
function App() {

  const data = [
    {
      plan : "FREE",
      price: "$0",
      user: "Single User",
      isUser : true,
      storage: "5 GB Storage",
      isStorage : true,
      publiceProjects: "Unlimited Public Projects",
      isPublicProjects : true,
      communityAccess: "Community Access",
      isCommunityAccess : true,
      privateProjects: "Unlimited Private Projects",
      isPrivateProjects : false,
      support: "Dedicated Phone Support",
      isSupport : false,
      subDomain: "Free Subdomain",
      isSubDomain : false,
      reports: "Monthly Status Reports",
      isReports : false
    },
    {
      plan : "PLUS",
      price: "$9",
      user: "5 Users",
      isUser : true,
      storage: "50 GB Storage",
      isStorage : true,
      publicProjects: "Unlimited Public Projects",
      isPublicProjects : true,
      communityAccess: "Community Access",
      isCommunityAccess : true,
      privateProjects: "Unlimited Private Projects",
      isPrivateProjects : true,
      support: "Dedicated Phone Support",
      isSupport : true,
      subDomain: "Free Subdomain",
      isSubDomain : true,
      reports: "Monthly Status Reports",
      isReports : false
    },
    {
      plan : "PRO",
      price: "$49",
      user: "Unlimited Users",
      isUser : true,
      storage: "150 GB Storage",
      isStorage : true,
      publiceProjects: "Unlimited Public Projects",
      isPublicProjects: true,
      communityAccess: "Community Access",
      isCommunityAccess : true,
      privateProjects: "Unlimited Private Projects",
      isPrivateProjects : true,
      support: "Dedicated Phone Support",
      isSupport : true,
      subDomain: "Unlimited Free Subdomain",
      isSubDomain : true,
      reports: "Monthly Status Reports",
      isReports : true
    }

  ]

  return <>
  <section class="pricing py-5">
  <div class="container">
        <div class="row">
          {
            data.map((e, i) => {
              return <Card data = {e} key ={i}/>
            })

          }
    
    </div>
  </div>
</section>
</>
}           

export default App
