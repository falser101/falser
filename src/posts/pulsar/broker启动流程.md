---
title: pulsar broker组件启动流程
author: falser101
date: 2024-01-10
categories:
  - pulsar
tags:
  - pulsar
---

# Broker组件启动流程
在收发消息前，我们得启动Broker服务，本章将介绍Broker在启动阶段都做了什么。各个模块之前的关系，服务启动不同模块的初始化顺序。