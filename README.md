# Ng-Quiz-Pwa

A simple project for demonstrate PWA.

![demo](https://raw.githubusercontent.com/JuniorTour/ng-quiz-pwa/master/notes/ng-quiz-pwa-demo-1.png)


## Run

```
git clone 

cd ng-quiz-pwa

npm i

ng s      // start in dev env with local development server

ng build --prod // build for prodction env
```


## Lighthouse Report


## PWA Definition

- Progressive - Work for every user, regardless of browser choice because they’re built with progressive enhancement as a core tenant.

- Responsive - Fit any form factor, desktop, mobile, tablet, or whatever is next.
  
-  Connectivity independent - Enhanced with service workers to work offline or on low quality networks.
  
- App-like - Use the app shell model to provide app-style navigations and interactions.
 
- Fresh - Always up-to-date thanks to the service worker update process.
  
 - Safe - Served via TLS to prevent snooping and ensure content hasn’t been tampered with.
  
 - Discoverable - Are identifiable as “applications” thanks to W3C manifests and service worker registration scope allowing search engines to find them.
  
 - Re-engageable - Make re-engagement easy through features like push notifications.
  
 - Installable - Allow users to “keep” apps they find most useful on their home screen without the hassle of an app store.
  
 - Linkable - Easily share via URL and not require complex installation.


## PWA-lization steps

https://houssein.me/progressive-angular-applications



## TODO

- Improve Style

- Notification 


## Light house Report

### 0. 3/21

> Performance 21
> Progressive Web App 55
> Accessibility 79
> Best Practices 94
> SEO 78

Not ideal.

Especially the 

1. `First meaningful paint: 15,720 ms`, 

Personally I think the main bottle neck is backend, the bandwidth of my server is only 1M/bps.

And the main.bundle.js is 500kb+ now, so it will cost about 4 seconds in theory to load this file.

Not to mention other files.


2. PWA part: 
```
5 Failed Audits
0
Does not provide fallback content when JavaScript is not available
Your app should display some content when JavaScript is disabled, even if it's just a warning to the user that JavaScript is required to use the app. Learn more.
Audit error: Required HTMLWithoutJavaScript gatherer encountered an error: FAILED_DOCUMENT_REQUEST

0
Does not redirect HTTP traffic to HTTPS
Audit error: Required HTTPRedirect gatherer encountered an error: FAILED_DOCUMENT_REQUEST

0
Page load is not fast enough on 3G
First Interactive was at 17,170 ms. More details in the "Performance" section.

0
Is not configured for a custom splash screen
Failures: Manifest does not have icons at least 512px.

0
Address bar does not match brand colors
Failures: No `<meta name="theme-color">` tag found.
```


 TODO:OPTIMIZE It is not simple to listen a same port by http and https.
 https://stackoverflow.com/questions/22453782/nodejs-http-and-https-over-same-port
 https://stackoverflow.com/questions/7450940/automatic-https-connection-redirect-with-node-js-express

### 1. 3/21

Fix 3 simple pwa Failed Audits:

- Does not provide fallback content when JavaScript is not available
- Is not configured for a custom splash screen,
- Address bar does not match brand colors
