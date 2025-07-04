#!/bin/bash

# 🚀 Script de Optimización para Vercel
# Ejecuta este script antes del primer despliegue

echo "🎯 Optimizando proyecto para Vercel..."

# Verificar que Node.js esté instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado. Instálalo desde https://nodejs.org/"
    exit 1
fi

# Verificar que npm esté instalado
if ! command -v npm &> /dev/null; then
    echo "❌ npm no está instalado. Instálalo con Node.js"
    exit 1
fi

echo "✅ Node.js y npm están instalados"

# Limpiar cache y reinstalar dependencias
echo "🧹 Limpiando cache..."
rm -rf node_modules package-lock.json
npm cache clean --force

echo "📦 Instalando dependencias con configuración legacy..."
npm install --legacy-peer-deps

# Verificar que el build funcione
echo "🔨 Probando build..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build exitoso"
else
    echo "❌ Error en el build. Revisa los errores arriba."
    exit 1
fi

# Probar preview
echo "👀 Probando preview..."
npm run preview &
PREVIEW_PID=$!
sleep 5
kill $PREVIEW_PID

echo "🎉 Proyecto optimizado y listo para Vercel!"
echo "🌐 Siguiente paso: Sube tu código a GitHub y conéctalo con Vercel"
echo "🚀 URL de despliegue: https://vercel.com/new/clone?repository-url=https://github.com/TU_USUARIO/projecto-pokemon"
