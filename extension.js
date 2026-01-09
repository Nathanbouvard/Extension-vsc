const vscode = require('vscode');

function activate(context) {
    // Vérifier et appliquer le thème automatiquement
    const config = vscode.workspace.getConfiguration();
    
    // Appliquer le thème de couleur
    config.update('workbench.colorTheme', 'Midnight Rose Theme', vscode.ConfigurationTarget.Global);
    
    // Appliquer le thème d'icônes
    config.update('workbench.iconTheme', 'rose-dark-icons', vscode.ConfigurationTarget.Global);
    
    // Petit message de confirmation discret
    vscode.window.showInformationMessage('🌹 Midnight Rose activé avec succès !');
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
