window.TREE_NODES = {
    // ===================== ENTRY =====================
    'start': {
        question: 'What are you trying to do?',
        hint: '',
        answers: [
            { label: 'Catalog a physical item', desc: 'Book, DVD, serial, map, score, etc.', next: 'phys_search_iz' },
            { label: 'Set up access to an electronic resource', desc: 'Ejournal, ebook, database, streaming media', next: 'elec_type' },
            { label: 'Edit or upgrade an existing record', desc: 'Fix errors, enhance a record, overlay with better data', next: 'edit_where' },
            { label: 'Quickly catalog a book for a patron', desc: 'A patron needs to check out a book right now', next: 'quick_catalog' },
            { label: 'Manage a digital object', desc: 'Institutional repository, digitized collection, etc.', next: 'rec_digital' },
        ]
    },

    // ===================== BRANCH 1: NEW PHYSICAL =====================
    'phys_search_iz': {
        question: 'First, search your Institution Zone (IZ). Is the title already in your local catalog?',
        hint: '',
        answers: [
            { label: 'Yes, I found it in my IZ', desc: '', next: 'phys_add_copy_location' },
            { label: "No, it's not in my IZ", desc: '', next: 'phys_search_nz' }
        ]
    },
    'phys_add_copy_location': {
        question: 'Does the record already have holdings at the location where this item will be shelved?',
        hint: '',
        answers: [
            { label: 'Yes', desc: '', next: 'rec_add_item_same_location' },
            { label: 'No', desc: '', next: 'rec_add_item_diff_location' }
        ]
    },
    'rec_add_item_same_location': {
        type: 'rec',
        title: 'Add an item to your existing holdings',
        body: '<h3>What to do</h3><p>Add a new item record to your existing holdings record.</p><ol><li>Find the holdings record in Alma and open it in the Metadata Editor</li><li>Add an item with the barcode, material type, and other details</li></ol>'
    },
    'rec_add_item_diff_location': {
        type: 'rec',
        title: 'Create new holdings for the different location, then add an item',
        body: '<h3>What to do</h3><p>Since the new copy is going to a different location, you need a new holdings record for that location before adding the item record.</p><ol><li>Find the bibliographic record in Alma and open it in the Metadata Editor</li><li>Add a new holdings record with the correct location and call number</li><li>Add an item to the new holdings with the barcode, material type, and other details</li></ol>'
    },
    'phys_search_nz': {
        question: 'Now search the Network Zone (NZ). Is the title there?',
        hint: '',
        answers: [
            { label: 'Yes, I found it in the NZ', desc: '', next: 'rec_add_holdings_nz' },
            { label: "No, it's not in the NZ either", desc: '', next: 'phys_search_oclc' }
        ]
    },
    'rec_add_holdings_nz': {
        type: 'rec',
        title: 'Add your holdings to the Network Zone record',
        body: '<h3>What to do</h3><p>Add your holdings and item record to the existing Network Zone (NZ) record.</p><ol><li>Open the NZ record in the Metadata Editor</li><li>Add holdings with your location and call number</li><li>Add an item with barcode and material type</li></ol><div class="key-rule">Adding holdings to an NZ record automatically creates a linked copy in your Institution Zone (IZ). You don\u2019t need to do anything extra.</div>'
    },
    'phys_search_oclc': {
        question: 'Now search OCLC/WorldCat. Is there a matching record?',
        hint: 'You can search from Connexion, WorldShare Record Manager, or from within Alma.',
        answers: [
            { label: 'Yes, I found it in OCLC', desc: '', next: 'phys_oclc_how' },
            { label: 'No match in OCLC either', desc: '', next: 'phys_original' }
        ]
    },
    'phys_oclc_how': {
        question: 'How would you like to import the record?',
        hint: '',
        answers: [
            { label: 'From Connexion or WorldShare Record Manager', desc: 'Export the record to Alma', next: 'rec_oclc_connexion' },
            { label: 'From within Alma', desc: 'Search and import without leaving Alma', next: 'rec_oclc_alma' }
        ]
    },
    'rec_oclc_connexion': {
        type: 'rec',
        title: 'Export from OCLC to the Network Zone, then add holdings and item',
        body: '<h3>What to do</h3><ol><li>Export the record from <a href="https://cuny907.sharepoint.com/sites/Alma/SitePages/OCLC%20Connexion.aspx" target="_blank" rel="noopener">Connexion</a> or <a href="https://cuny907.sharepoint.com/sites/Alma/SitePages/OCLC-WorldShare-Record-Manager.aspx" target="_blank" rel="noopener">WorldShare Record Manager</a> to the Alma Network Zone (NZ).</li><li>In Alma, find the newly imported NZ record and open it in the Metadata Editor</li><li>Add holdings with your location and call number</li><li>Add an item with barcode and material type</li></ol><div class="key-rule">Adding holdings automatically creates a linked copy in your Institution Zone (IZ).</div>'
    },
    'rec_oclc_alma': {
        type: 'rec',
        title: 'Import from WorldCat via Alma, then add holdings and item',
        body: '<h3>What to do</h3><ol><li>Use Alma\u2019s Search Resources feature to search WorldCat and import the record to the Network Zone (NZ).</li><li>Open the imported NZ record in the Metadata Editor</li><li>Add holdings with your location and call number</li><li>Add an item with barcode and material type</li></ol><div class="key-rule">Adding holdings automatically creates a linked copy in your Institution Zone (IZ).</div>'
    },
    'phys_original': {
        question: "Should this record be in the Network Zone?",
        answers: [
            { label: 'Yes', next: 'rec_original_nz' },
            { label: 'No', next: 'rec_original_iz' }
        ]
    },
    'rec_original_nz': {
        type: 'rec',
        title: 'Create the original record in OCLC and export it to the Network Zone',
        body: '<h3>What to do</h3><ol><li>Create the record in <a href="https://cuny907.sharepoint.com/sites/Alma/SitePages/OCLC%20Connexion.aspx" target="_blank" rel="noopener">Connexion</a> or <a href="https://cuny907.sharepoint.com/sites/Alma/SitePages/OCLC-WorldShare-Record-Manager.aspx" target="_blank" rel="noopener">WorldShare Record Manager</a></li><li>Contribute the record to WorldCat</li><li>Export it to the Alma Network Zone (NZ)</li><li>In Alma, find the newly imported NZ record and open it in the Metadata Editor</li><li>Add holdings with your location and call number</li><li>Add an item with barcode and material type</li></ol><div class="key-rule">Consult the <a href="https://cunyinternal.policystat.com/policy/18735910/latest" target="_blank" rel="noopener">Quality of Bibliographic Records</a> policy for cataloging standards.</div>'
    },
    'rec_original_iz': {
        type: 'rec',
        title: 'Create the original record in your Institution Zone',
        body: '<h3>What to do</h3><ol><li>Create a new record in your Institution Zone (IZ) using the Metadata Editor</li><li>Catalog the item</li><li>Add holdings with your location and call number</li><li>Add an item with barcode and material type</li></ol>'
    },

    // ===================== BRANCH 2: ELECTRONIC RESOURCES =====================
    'elec_type': {
        question: 'Is this a centrally-licensed resource (managed by OLS) or licensed by your institution?',
        hint: '',
        answers: [
            { label: 'Centrally licensed (OLS manages it)', desc: 'CUNY-wide databases, ejournal packages, etc.', next: 'elec_central' },
            { label: 'Licensed by my institution', desc: 'My library pays for this independently', next: 'elec_institution_type' },
            { label: "I'm not sure", desc: '', next: 'rec_elec_unsure' }
        ]
    },
    'elec_central': {
        question: 'Is the resource showing up correctly in OneSearch?',
        hint: '',
        answers: [
            { label: "Yes, it's working fine", desc: '', next: 'rec_elec_central_ok' },
            { label: 'No, something is wrong or missing', next: 'rec_elec_central_problem' }
        ]
    },
    'rec_elec_central_ok': {
        type: 'rec',
        title: 'No action needed',
        body: '<h3>What to do</h3><p>OLS activates and manages electronic resources in the Network Zone (NZ) for CUNY-wide licenses. If everything is working, no action is needed on your part.</p>'
    },
    'rec_elec_central_problem': {
        type: 'rec',
        title: 'Contact OLS',
        body: '<h3>What to do</h3><p>OLS activates and manages electronic resources in the Network Zone (NZ) for CUNY-wide licenses. If an electronic resource isn\u2019t activated, has broken links, or is missing titles, contact OLS to report the issue.</p><h3>Who to contact</h3><p><a href="mailto:support@cuny-ols.libanswers.com">Office of Library Services (OLS)</a></p>'
    },
    'rec_elec_unsure': {
        type: 'rec',
        title: 'Check with OLS or your e-resources librarian at your institution',
        body: '<h3>What to do</h3><p>If you\u2019re not sure whether a resource is centrally licensed (by CUNY/OLS) or campus-licensed, check with OLS or your <a href="https://cuny907.sharepoint.com/sites/ols-ac-erac/SitePages/Home.aspx" target="_blank" rel="noopener">e-resources librarian at your institution</a>. This determines who is responsible for activating it in Alma.</p><h3>Who to contact</h3><p><a href="mailto:support@cuny-ols.libanswers.com">Office of Library Services (OLS)</a> or your <a href="https://cuny907.sharepoint.com/sites/ols-ac-erac/SitePages/Home.aspx" target="_blank" rel="noopener">e-resources librarian at your institution</a></p>'
    },
    'elec_institution_type': {
        question: 'Is this a single title or a database/package?',
        hint: '',
        answers: [
            { label: 'A single title', desc: 'Ejournal, ebook, or streaming title', next: 'elec_institution_search' },
            { label: 'A database or package', desc: 'A collection of titles from a vendor', next: 'elec_collection_search' }
        ]
    },
    'elec_collection_search': {
        question: 'Search the Community Zone (CZ) for the electronic collection. Is it there?',
        hint: '',
        answers: [
            { label: 'Yes, I found it in the CZ', desc: '', next: 'rec_elec_activate_collection' },
            { label: "No, it's not in the CZ", desc: '', next: 'rec_elec_create_collection_iz' }
        ]
    },
    'rec_elec_activate_collection': {
        type: 'rec',
        title: 'Activate the Community Zone (CZ) electronic collection',
        body: '<h3>What to do</h3><p>Activate the appropriate Community Zone (CZ) electronic collection. This creates a linked copy in your Institution Zone (IZ).</p><ol><li>Find the CZ electronic collection in your search results</li><li>Activate the electronic collection and follow the activation workflow</li></ol><div class="key-rule">During activation, you can choose whether to use the CZ bibliographic records or substitute your own. You can also replace them with better records later.</div>'
    },
    'rec_elec_create_collection_iz': {
        type: 'rec',
        title: 'Create a local electronic collection in your Institution Zone',
        body: '<h3>What to do</h3><p>Since the collection isn\u2019t in the Community Zone (CZ), create a local electronic collection in your Institution Zone (IZ).</p><ol><li>Create a new electronic collection in your IZ</li><li>Add electronic portfolios for each title in the collection</li><li>Configure access URLs and coverage details</li></ol><div class="key-rule">You can attach a bibliographic record to the electronic collection in your IZ now or later.</div>'
    },
    'elec_institution_search': {
        question: 'Search the Community Zone (CZ) for the title. Is it there?',
        hint: '',
        answers: [
            { label: 'Yes, I found it in the CZ', desc: '', next: 'rec_elec_activate_cz' },
            { label: "No, it's not in the CZ", desc: '', next: 'rec_elec_create_iz' }
        ]
    },
    'rec_elec_activate_cz': {
        type: 'rec',
        title: 'Activate the Community Zone (CZ) electronic portfolio',
        body: '<h3>What to do</h3><p>Activate the appropriate Community Zone (CZ) electronic portfolio. This creates a linked copy in your Institution Zone (IZ).</p><ol><li>Find the CZ record in your search results</li><li>Order or activate the electronic portfolio and follow the activation workflow</li><li>Add coverage dates and other details to the electronic portfolio, if necessary</li></ol><div class="key-rule">Order or activate the <strong>electronic portfolio</strong>, not the bibliographic record itself. Your library gets access while staying connected to the shared CZ record.</div>'
    },
    'rec_elec_create_iz': {
        type: 'rec',
        title: 'Create a local electronic portfolio in your Institution Zone',
        body: '<h3>What to do</h3><p>Since the resource isn\u2019t in the Community Zone (CZ), create a local electronic portfolio in your Institution Zone (IZ).</p><ol><li>Find or create the bibliographic record for the electronic resource</li><li>Add an electronic portfolio with the access URL</li><li>Add coverage dates and other details to the electronic portfolio, if necessary</li></ol>'
    },

    // ===================== BRANCH 3: EDIT/UPGRADE =====================
    'edit_where': {
        question: 'Is the record in the Network Zone (NZ) or only in your Institution Zone (IZ)?',
        hint: "Check the record's zone indicator in the Metadata Editor.",
        answers: [
            { label: "It's in the NZ", desc: '', next: 'rec_edit_nz' },
            { label: "It's only in my IZ", desc: '', next: 'rec_edit_iz' },
            { label: "I'm not sure how to tell", desc: '', next: 'rec_edit_how_to_tell' }
        ]
    },
    'rec_edit_nz': {
        type: 'rec',
        title: 'Edit the record in the Network Zone',
        body: '<h3>What to do</h3><p>Edit the record directly in the Network Zone (NZ). All CUNY staff have NZ editing permissions. Your changes will apply across all institutions that use this record.</p><div class="key-rule">NZ editing policies can be complex. If you\u2019re unsure whether a particular edit is appropriate, consult your institution\u2019s cataloging policy or check with a colleague.</div>'
    },
    'rec_edit_iz': {
        type: 'rec',
        title: 'Edit the record in your Institution Zone',
        body: '<h3>What to do</h3><ol><li>Open the record in your Institution Zone (IZ) using the Metadata Editor</li><li>Make your edits</li><li>Save the record</li></ol>'
    },
    'rec_edit_how_to_tell': {
        type: 'rec',
        title: 'How to tell which zone a record is in',
        body: '<h3>What to look for</h3><ul><li>Check the icon next to the record. See <a href="https://cuny-ols.libanswers.com/faq/417153" target="_blank" rel="noopener">What do the icons in Alma search mean?</a> for a guide.</li><li>Institution Zone (IZ) records end in a four-digit number unique to your campus. You can find this number in the \u201cAlma Institution Code\u201d column at <a href="https://cuny907.sharepoint.com/sites/cuny-libraries/SitePages/Libraries.aspx" target="_blank" rel="noopener">CUNY Libraries</a>.</li><li>Network Zone (NZ) records end in 6121.</li></ul>'
    },

    // ===================== BRANCH 4: QUICK CATALOG =====================
    'quick_catalog': {
        question: 'Does the book already have a record in Alma?',
        hint: "If you find the title in Alma, you just need to add an item. If not, you'll create a brief record.",
        answers: [
            { label: "Yes, the title is in Alma but this copy isn't", desc: "The bibliographic record exists but there's no item with this barcode", next: 'rec_quick_add_copy' },
            { label: "No, there's no record for this book at all", desc: 'I need to create a new record from scratch', next: 'rec_quick_new_book' }
        ]
    },
    'rec_quick_add_copy': {
        type: 'rec',
        title: 'Add another copy of an existing book',
        body: '<h3>What to do</h3><p>Create an item record for this copy and attach it to the existing record.</p><ol><li>Use the Add Physical Item function in Alma</li><li>Set \u201cHoldings Type\u201d to <strong>Existing</strong> and search for the record</li><li>Add the barcode, location, and any other item details</li><li>Save</li></ol><p>You can now check the book out to the patron. When it’s returned, send the item for physical processing (barcode label, library stamp, etc.).</p>'
    },
    'rec_quick_new_book': {
        type: 'rec',
        title: 'Create a brief record on the fly',
        body: '<h3>What to do</h3><p>Create a brief bibliographic record, holdings record, and item record all at once so the patron can check it out immediately.</p><ol><li>Use the Add Physical Item function in Alma</li><li>Set \u201cHoldings Type\u201d to <strong>New</strong> and \u201cCitation Type\u201d to <strong>Book</strong></li><li>Set \u201cPlacement of new record\u201d to <strong>Institution</strong></li><li>Fill in the <strong>Title</strong> (required) and any other info you have</li><li>Uncheck \u201cSuppress from Discovery\u201d if you want it visible in OneSearch</li><li>Fill in <strong>Location</strong> (required) and <strong>Barcode</strong> (recommended)</li><li>Save</li></ol><div class="key-rule">Alma attaches an Acquisition Technical Services request to the item when it\u2019s created. You can still check the book out to the patron right away.</div><h3>After the patron returns the book</h3><ol><li>Check in the book. It will go in transit to the Acquisitions Department.</li><li>Send the book to Technical Services for cataloging and physical processing</li><li>Scan the item in from the Acquisitions Department and set \u201cDone\u201d to <strong>Yes</strong></li><li>Scan the item in again from the main Service Desk to clear the routing request</li></ol>'
    },

    // ===================== DIGITAL OBJECTS =====================
    'rec_digital': {
        type: 'rec',
        title: 'Digital objects are not available at CUNY',
        body: '<h3>What to do</h3><p>CUNY does not subscribe to any Alma digital products, so digital object management is not available in our Alma environment.</p>'
    }
};
