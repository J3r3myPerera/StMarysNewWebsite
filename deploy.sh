#!/bin/bash

echo "🚀 Building St. Mary's Church website..."

# Install dependencies
npm install

# Build the project
npm run build

echo "✅ Build completed successfully!"
echo "📁 Static files are ready in the 'out' directory"
echo ""
echo "🌐 To deploy:"
echo "   - Upload the 'out' directory to your web hosting service"
echo "   - Or use Vercel: vercel --prod"
echo "   - Or use Netlify: drag the 'out' folder to Netlify"
echo ""
echo "📞 For support, contact: +94 112843561"
