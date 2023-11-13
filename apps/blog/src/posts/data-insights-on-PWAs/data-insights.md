---
layout: post
title: Data insights on PWAs
excerpt: A quick read on some insights derived from our  analytics on PWABuilder.com
description: This blog presents a snapshot of data from Aug - Oct 2023 of all the PWAs that have been through the flow of PWABuilder.com and what we can learn from them.
date: 2023-11-02
updatedDate: 2023-11-02
trending: true
featured: true
image: posts/data-insights-on-PWAs/titleimage.png
isPost: true
backUrl: '/'
author:
  name: Amrutha Srinivasan
  title: PWABuilder Engineer
tags:
  - post
  - PWA
  - Insights
---


Every day, [PWABuilder](https://pwabuilder.com/) analyzes thousands of PWAs. We use this data to learn from you, the developers, about all the current trends in PWAs based on the kind of PWAs you create. In this article, we present some data and insights gathered from a 3-month snapshot of our analytics (Aug 2023 – Oct 2023). 
During this period, we recorded a total of 10,640 unique URLs that went through the flow of PWABuilder. That’s a PWA data mine right there! 
Manifests and service workers are the heart and soul of a PWA. They distinguish your PWA from being just another website. Manifests define how your PWA looks and behaves when installed on a device. Service workers are essentially JavaScript workers that run in the background and are used for features like notifications, offline support, background sync, and many more. They can also be used just to fetch data from APIs for the website or pretty much hold any logic that needs to run on the site.

Learn more about [manifests](https://docs.pwabuilder.com/#/home/pwa-intro?id=web-app-manifests) and [service workers](https://docs.pwabuilder.com/#/home/sw-intro) from our documentation. 

## Service Worker Analysis

Out of the 10,640 PWAs, about 3940 of them had service workers that were detected by our site.
 
 ![A graph of the number of PWAs that have each app capability enabled](/posts/data-insights-on-PWAs/appcap.png)

What does this tell us? Well, for one thing, it shows that there is a lot of interest and potential in building PWAs, as evidenced by the large number of URLs that came to PWABuilder. However, it also reveals that there is a gap between the desire to create PWAs and the actual implementation of the core PWA features. Only about 37% of the PWAs had service workers, which means that  majority of them are missing out on the benefits of offline support, push notifications, background sync, and more. It is also a fair argument that not all PWAs need all of these features. Lately a lot of the major browsers have done away with mandating service workers for installability which could also mean developers see less value in building and maintaining service workers unless there is a business reason to use them.

### Manifests and app capabilities

Manifests are a hard requirement for a PWA, unlike service workers. They hold a lot of crucial information that is needed for the PWA to behave more app-like such as icons, file handlers, link handlers and so much more. 

 ![A bar graph that shows the number of PWAs with and without service workers](/posts/data-insights-on-PWAs/SW.png)

 We took 6 of the app capabilities into account to try and analyze how often they are being used in PWAs these days. A quick description of these:

 * File handlers:  In a PWA, the file_handlers member specifies the types of files the PWA can handle. When installed, the browser uses this to associate the PWA with specific file types at the OS level.
 * Launch handlers: In a PWA, the launch_handler field specifies how the PWA should be launched and navigated to. 
 * Protocol handlers: In a PWA, protocol handlers are used to register the PWA to handle certain allowed protocols. A protocol is a string that allows clients to identify a resource on the web, such as http or mailto. When a PWA is installed, it can register to handle specific protocols, such as mailto or geo.
 * Share target:  A share target is a feature in a Progressive Web App (PWA) that allows the app to receive shared content from other apps. This is done by adding a share_target member to the web app manifest, which specifies how the app should handle shared data. It allows for seamless integreation of the PWA with the native sharing capabilities of the device. 
 * Shortcuts: Shortcuts in a Progressive Web App (PWA) allow users to quickly access specific features or pages within the app. These shortcuts can be added to the web app manifest and are displayed when a user long-presses or right-clicks on the app icon on their device.
 * Widgets: Widgets are small applications that can be embedded within a larger application or operating system. They are designed to provide quick access to frequently used information or functionality. In the context of an app manifest, widgets are defined in the PWA manifest file using the widgets manifest member.

## Insights from the data

* It seems like  shortcuts are among the more popular features that developers like to use. Shortcuts are relatively easy to add, and are a quick way (or should a say, a shortcut), to add a feature that makes the PWA more app like. On the other hand, features such as share_target, file_handlers and widgets require more work to enable and are also only relevant for certain scenarios so it's understandable why they are not as popular. 

* The number of PWAs with widgets might seem low, but it was actually a surprise to me as widgets are relatively a newer feature. Earlier this year, Facebook was one of the first big PWAs to add widgets to their manifest. Widgets are an easy way to increase engagement across different surfaces on an operating system. The uptick in widgets is a positive indicator of increasing awareness among developers. 

* There are many apps with detected protocol handlers, but upon a closer look, a large number of them were in fact empty arrays. It’s likely that the developers are using manifest templates that already contain protocol handlers but are not actually using them. 

 
## Parting thoughts

From the data, it seems like developers are showing interest in adding app capabilities to improve the native-like experience of their PWA. As a developer, it's also important to understand and use these capabilities consciously only where it makes sense and avoid feature overload. Apps like [music player PWA](https://xamuzik.com/) are great examples of how to use app capabilities. This app has used many of the app capabilities, not only the ones listed above but others as well (handle_links, edge_side_panel, display_override). It's always great to find PWAs built by developers in the community that exemplify what a great app-like experience can be!

While digging through the data, I stumbled upon this [music player PWA](https://xamuzik.com/) that had almost all the app capabilities. It’s available on multiple app stores including the Microsoft Store. The UX feels very app-like, and uses a lot of app capabilities that are relevant for this app and offer a rich native experience. Shout out to the developers! We love finding apps like these that exemplify what good PWAs are and how well PWAs can be integrated with the operating system. 