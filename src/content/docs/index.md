---
title: Test page
---

This is only a test for the local builder.

> If you see this, the **whole** infrastructure operates correctly.

## Quick overview of the current state fo the project

I've managed to create a buildable, reliable system for delivering a compiled and functional **Starlight** documentation website deployed in a pod.

This is a crude solution:

* You need to rebuild the whole infrastructure if you want to pull the changes from the repo.
* No functionality to retain website accessibility if anything goes wrong with the builder.
* Cramming everything into a single pod is a great way to lose everything if the system malfunctions, blinks or otherwise crashes.

Keep in mind - the main goal was to learn how to deploy complex systems within a Kubernetes-managed infrstructure.

## Plans for the next iteration

* Use a [persistent volume (PVC)](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) to retain the built website, so we may even `delete` the pod with the Astro engine or cycle the pod with the `git-sync` routine - the site needs to be accessible regardless.
* Move all the containers to separate pods. Maybe organize these pods into a namespace?
* Create a dedicated node on the cluster to serve docs.

All this and other things are in the next iteration.
