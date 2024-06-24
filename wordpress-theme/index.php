<?php get_header(); ?>
<main>
    <section id="home">
        <div class="container">
            <h1>Willkommen bei <?php bloginfo('name'); ?></h1>
            <p>Innovative IT- und KI-Lösungen für moderne Unternehmen</p>
            <a href="#contact" class="btn btn-primary">Kontakt aufnehmen</a>
            <a href="#services" class="btn btn-secondary">Mehr erfahren</a>
        </div>
    </section>
    <section id="services">
        <div class="container">
            <h2>Unsere Dienstleistungen</h2>
            <div class="services-grid">
                <div class="service-item">
                    <h3>IT-Beratung</h3>
                    <p>Optimierung und Skalierung der IT-Infrastruktur</p>
                </div>
                <div class="service-item">
                    <h3>KI-Beratung</h3>
                    <p>Implementierung von KI-Tools und Datenstrategien</p>
                </div>
                <div class="service-item">
                    <h3>Medientechnik</h3>
                    <p>Modernste Lösungen für Medienbedürfnisse</p>
                </div>
                <div class="service-item">
                    <h3>IT-Training</h3>
                    <p>Schulungen für Mitarbeiter</p>
                </div>
                <div class="service-item">
                    <h3>Mobile Device Management (MDM)</h3>
                    <p>Sicherheit und Verwaltung mobiler Endgeräte</p>
                </div>
                <div class="service-item">
                    <h3>Kundenservice und technischer Support</h3>
                    <p>Rund um die Uhr Unterstützung</p>
                </div>
            </div>
        </div>
    </section>
    <section id="industries">
        <div class="container">
            <h2>Branchenfokus</h2>
            <div class="industries-grid">
                <div class="industry-item">
                    <h3>Einzelhandel</h3>
                    <p>Automatisierung und Kundendatenanalyse</p>
                </div>
                <div class="industry-item">
                    <h3>Rechtskanzleien</h3>
                    <p>Dokumentenmanagement und Datenschutz</p>
                </div>
                <div class="industry-item">
                    <h3>Großhandel</h3>
                    <p>Optimierung der Supply Chain und Bestandsmanagement</p>
                </div>
                <div class="industry-item">
                    <h3>Gesundheitswesen</h3>
                    <p>Datenmanagement und Telemedizin</p>
                </div>
            </div>
        </div>
    </section>
    <section id="testimonials">
        <div class="container">
            <h2>Erfolgsgeschichten und Testimonials</h2>
            <div class="testimonials-grid">
                <div class="testimonial-item">
                    <p>"Durch die Zusammenarbeit mit <?php bloginfo('name'); ?> konnten wir unsere IT-Infrastruktur effizient skalieren und unsere Prozesse optimieren."</p>
                    <p>- Kunde A</p>
                </div>
                <div class="testimonial-item">
                    <p>"Die Implementierung von KI-Tools hat unsere Kundenzufriedenheit um 25% verbessert."</p>
                    <p>- Kunde B</p>
                </div>
            </div>
        </div>
    </section>
    <section id="contact">
        <div class="container">
            <h2>Kontaktieren Sie uns</h2>
            <div class="contact-grid">
                <div class="contact-info">
                    <h3>Kontaktdaten</h3>
                    <p>Adresse: Musterstraße 1, 12345 Musterstadt</p>
                    <p>Telefon: +49 123 456 789</p>
                    <p>E-Mail: info@deinunternehmen.de</p>
                </div>
                <div class="contact-form">
                    <h3>Kontaktformular</h3>
                    <form>
                        <input type="text" placeholder="Ihr Name" required>
                        <input type="email" placeholder="Ihre E-Mail" required>
                        <textarea placeholder="Ihre Nachricht" required></textarea>
                        <button type="submit" class="btn btn-primary">Kontakt aufnehmen</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</main>
<?php get_footer(); ?>