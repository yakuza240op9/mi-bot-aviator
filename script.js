const app = {
    iniciar: function() {
        const user = document.getElementById('username').value;
        if (!user) { alert("ID requerido"); return; }

        this.cambiarPantalla('screen-loading');
        
        setTimeout(() => {
            const val = (Math.random() * (5.00 - 1.20) + 1.20).toFixed(2);
            document.getElementById('signal-output').innerText = val + "x";
            this.cambiarPantalla('screen-signal');
        }, 2500);
    },
    cambiarPantalla: function(id) {
        document.getElementById('screen-login').classList.add('hidden');
        document.getElementById('screen-loading').classList.add('hidden');
        document.getElementById('screen-signal').classList.add('hidden');
        document.getElementById(id).classList.remove('hidden');
    }
};
