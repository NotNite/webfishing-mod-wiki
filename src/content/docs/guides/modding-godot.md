---
title: Modding in the Godot editor
sidebar:
  order: 2
---

If you haven't already, [follow the setup guide](/webfishing-mod-wiki/guides/setup/).

Open your project in the Godot editor by selecting Import on the right sidebar. You should do the following before continuing:

- Rename the project in "Project > Project Settings".
- Rename the folder in `mods`.

## Working in a decompiled project

You can work in a decompiled project if you want with the following command (must be ran in an admin PowerShell prompt):

```powershell
NewItem -ItemType SymbolicLink -Path path/to/decompiled_project/mods/ModId -Target path/to/project/mods/ModId
```

Any changes you make in the decompiled project will update the project in your mod folder.
