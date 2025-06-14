<?php
/**
 * Plugin Name: iFrame Message Navigator
 * Description: Embeds an iframe and listens for cross-origin messages to navigate the parent window.
 * Version: 1.0
 * Author: OpenAI ChatGPT
 */

// Register shortcode
function imn_iframe_message_shortcode($atts) {
    $a = shortcode_atts(array(
        'src' => '',
        'width' => '100%',
        'height' => '600px',
    ), $atts);

    if (empty($a['src'])) return '<p><strong>Error:</strong> No iframe source provided.</p>';

    ob_start();
    ?>
    <iframe id="imnIframe" 
    src="<?php echo esc_url($a['src']); ?>" width="<?php echo esc_attr($a['width']); 
    ?>" height="<?php echo esc_attr($a['height']); ?>" style="border:0;"></iframe>

    <script>
        window.addEventListener('message', function(event) {
            // Replace this with your expected origin
            const trustedOrigin = new URL("<?php echo esc_url($a['src']); ?>").origin;

            if (event.origin !== trustedOrigin) {
                console.warn("Blocked message from unknown origin:", event.origin);
                return;
            }

            const message = event.data;

            if (message && message.type === 'navigate' && message.url) {
                window.location.href = message.url;
            }
        });
    </script>
    <?php
    return ob_get_clean();
}
add_shortcode('iframe_message_navigator', 'imn_iframe_message_shortcode');
// Add responsive styles in the footer for better performance
function imn_add_responsive_styles() {
    ?>
    <style>
        /* Responsive iframe wrapper */
        .iframe-container {
            position: relative;
            width: 100%; /* Full width */
            height: 0;
            padding-bottom: 56.25%; /* Default 16:9 Aspect Ratio (You can adjust the ratio) */
            overflow: hidden;
            border-radius: 10px; /* Optional rounded corners */
        }

        .iframe-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none;
        }

        /* Mobile responsiveness: adjust aspect ratio */
        @media screen and (max-width: 768px) {
            .iframe-container {
                padding-bottom: 75%; /* 4:3 Aspect Ratio for tablets */
            }
        }

        @media screen and (max-width: 480px) {
            .iframe-container {
                padding-bottom: 100%; /* Square Aspect Ratio for mobile */
            }
        }
    </style>
    <?php
}
add_action('wp_footer', 'imn_add_responsive_styles');
