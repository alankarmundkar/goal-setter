
const departmentList = [
  {
    id: 'productEngineering', 
    label: "Product Engineering"
  },
  {
    id: 'productDelivery', 
    label: "Product Delivery"
  },
  {
    id: 'accountManagement', 
    label: "Account Management"
  }
]

const designationList = {
  productEngineering :  [
    {
      id : "avp-ui-ux",
      label: 'Associate Vice President- UI/UX'
    },
    {
      id : "principal-backend",
      label: 'Principal Engineer - Backend'
    },
    {
      id : "senior-software-engineer",
      label: 'Senior Software Engineer'
    },
    {
      id : "software-engineer",
      label: 'Software Engineer'
    },

  ],
  productDelivery :[{
    id:'avp-pd',
    label: "Associate Vice President-Product Delivery ",
  },
  {
    id:'pdm-pd',
    label: "Product Delivery Manager",
  }
  ],
  accountManagement :[{
    id:'avp-account',
    label: "Associate Vice President - Account Management",
  },
  {
    id:'key-account-manage',
    label: "Key Account Manager",
  }
  ]
}
const goals = {
  "software-engineer" : [
    {
      title: "Creating 6 component stories in UI-libraries.",
      description: "Creating component stories for a UI library in the context of a dispatcher web application involves breaking down the UI into individual components that can be reused across the application. This practice facilitates collaboration between developers and UI/UX designers, as it offers visibility into the existing components within the product and ensures uniformity throughout the entire application."
    },
    {
      title: "To setup Mock Service Worker on the product (Dispatcher Web Application)",
      description: "Mock Service Worker is an API mocking library that uses Service Worker API to intercept actual request Software is often being developed in an agile, competitive environment: shifting deadlines, parallel implementations, continuous delivery. Sometimes waiting on the API to be done is simply not an option.Advantage of using mock service worker api is  we can mock  api and response of the api so front developers has no dependency on backend developer .Therefore both frontend and backend development can be done simultaneously and after backend development is done , frontend developer will just replace mock api with real api"
    },
    {
      title: "To setup Mock Service Worker on the product (Dispatcher Web Application)",
      description: "Mock Service Worker is an API mocking library that uses Service Worker API to intercept actual request Software is often being developed in an agile, competitive environment: shifting deadlines, parallel implementations, continuous delivery. Sometimes waiting on the API to be done is simply not an option.Advantage of using mock service worker api is  we can mock  api and response of the api so front developers has no dependency on backend developer .Therefore both frontend and backend development can be done simultaneously and after backend development is done , frontend developer will just replace mock api with real api"
    },
    {
      title: "To setup Mock Service Worker on the product (Dispatcher Web Application)",
      description: "Mock Service Worker is an API mocking library that uses Service Worker API to intercept actual request Software is often being developed in an agile, competitive environment: shifting deadlines, parallel implementations, continuous delivery. Sometimes waiting on the API to be done is simply not an option.Advantage of using mock service worker api is  we can mock  api and response of the api so front developers has no dependency on backend developer .Therefore both frontend and backend development can be done simultaneously and after backend development is done , frontend developer will just replace mock api with real api"
    },
    {
      title: "To setup Mock Service Worker on the product (Dispatcher Web Application)",
      description: "Mock Service Worker is an API mocking library that uses Service Worker API to intercept actual request Software is often being developed in an agile, competitive environment: shifting deadlines, parallel implementations, continuous delivery. Sometimes waiting on the API to be done is simply not an option.Advantage of using mock service worker api is  we can mock  api and response of the api so front developers has no dependency on backend developer .Therefore both frontend and backend development can be done simultaneously and after backend development is done , frontend developer will just replace mock api with real api"
    },
    {
      title: "To setup Mock Service Worker on the product (Dispatcher Web Application)",
      description: "Mock Service Worker is an API mocking library that uses Service Worker API to intercept actual request Software is often being developed in an agile, competitive environment: shifting deadlines, parallel implementations, continuous delivery. Sometimes waiting on the API to be done is simply not an option.Advantage of using mock service worker api is  we can mock  api and response of the api so front developers has no dependency on backend developer .Therefore both frontend and backend development can be done simultaneously and after backend development is done , frontend developer will just replace mock api with real api"
    }
    
  ],
  "senior-software-engineer": [
    {
      title: "Fixing 20 List View UI Issues.",
      description: "The refresh and pagination button is not getting disabled when the user clicks on it , so as the user interface  is not changed , the user thinks that button is not clicked and makes unnecessary api calls , making load on production .So my goal is to fix these problem in all list view in the product."
    }
  ]
}

export  {departmentList ,designationList, goals}