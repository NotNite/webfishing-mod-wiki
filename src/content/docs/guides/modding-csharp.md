---
title: Modding with C#
sidebar:
  order: 3
---

## Requirements

- An IDE or editor for C#
  - We suggest [JetBrains Rider](https://www.jetbrains.com/rider), but Visual Studio and Visual Studio Code work as well.
- [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download)
  - You likely already have this installed if GDWeave is running.

## Getting started

If you haven't already, [follow the setup guide](/webfishing-mod-wiki/guides/setup/).

Open the solution in your IDE. You should do the following before continuing:

- Rename the solution.
- Rename the project & make sure the folder was renamed.
- Change the namespace in each file.

See the GDWeave documentation on the sidebar for information on the C# APIs.

## Building the project

To work on the project, you need to set the `GDWeavePath` environment variable to your game install's GDWeave directory (e.g. `G:\games\steam\steamapps\common\WEBFISHING\GDWeave`). This can also be done in Rider with `File | Settings | Build, Execution, Deployment | Toolset and Build | MSBuild global properties` or with a .user file in Visual Studio.
