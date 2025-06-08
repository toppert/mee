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
    <iframe id="imnIframe" src="<?php echo esc_url($a['src']); ?>" width="<?php echo esc_attr($a['width']); ?>" height="<?php echo esc_attr($a['height']); ?>" style="border:0;"></iframe>

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
