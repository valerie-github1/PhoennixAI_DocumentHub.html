import base64, os, re

base = r'C:\Users\wilco\phoennixai-mission-control'
logo_path = os.path.join(base, 'PhoennixAI.jpg')

with open(logo_path, 'rb') as f:
    b64 = base64.b64encode(f.read()).decode('utf-8')
favicon = '<link rel="icon" type="image/jpeg" href="data:image/jpeg;base64,' + b64 + '">'

files = [
    'PhoennixAI_PaymentConfirmation.html',
    'PhoennixAI_NDA_SignHub.html',
    'PhoennixAI_Auth_Login.html',
    'PhoennixAI_BetaWaitlist_Landing.html',
    'PhoennixAI_BetaWaitlist.html',
    'PhoennixAI_BetaDashboard.html',
    'PhoennixAI_DocumentHub.html',
]

for fname in files:
    fpath = os.path.join(base, fname)
    if not os.path.exists(fpath):
        print('SKIP: ' + fname)
        continue
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    # Remove any existing favicon tags first
    content = re.sub(r'<link[^>]*rel=["\'](?:icon|shortcut icon)["\'][^>]*>', '', content)
    # Insert correctly inside <head>
    if '<head>' in content:
        content = content.replace('<head>', '<head>\n' + favicon, 1)
        action = 'FIXED via head tag'
    elif '<HEAD>' in content:
        content = content.replace('<HEAD>', '<HEAD>\n' + favicon, 1)
        action = 'FIXED via HEAD tag'
    else:
        content = favicon + '\n' + content
        action = 'FIXED at top'
    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(content)
    # Verify
    check = 'rel="icon"' in content
    print(('OK' if check else 'FAILED') + ' ' + action + ': ' + fname)

print('Done.')
