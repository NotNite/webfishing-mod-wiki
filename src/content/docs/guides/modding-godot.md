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

If you'd like to work in a decompiled WEBFISHING build, you can create a symbolic link from your separate project files to the decompiled project files. To do so, create a `mods` folder inside the decompiled project, open PowerShell as an administrator, and then run the following command:

```powershell
New-Item -ItemType SymbolicLink -Path path/to/decompiled_project/mods/ModId -Target path/to/project/mods/ModId
```

Under AutoLoad in the project settings, add the path to your `main.gd` file, and name the autoload after your mod's ID. This will allow your mod to run in the editor for easier debugging. Any changes you make will be identical between your mod's project files and the decompiled project, allowing you to debug your mod in the decompiled game and then export your mod separately to avoid unwanted dependencies.

:::caution
If your mod contains scenes that reference files in the game, you should never open these scenes outside of the decompiled project! Godot will attempt to fix the missing dependencies by removing them, breaking your mod. If you get a missing dependencies pop-up, you should always close it.
:::

## Exporting your mod

:::note
This step is automated if you are using [manifestation](/webfishing-mod-wiki/tools/manifestation).
:::

When you're ready to export your mod for GDWeave, click on Project and open the Export menu. Create a new preset for Windows Desktop:

- Uncheck "Runnable".
- Ensure the export mode is set to export all resources under the Resources tab.
- Click the button to export a PCK/Zip.
- Change the file type to the Godot Project Pack.
- Disable "Export with Debug".
- Save the file.

The exported .pck is now able to be loaded by GDWeave.
